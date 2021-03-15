import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Friend } from 'src/app/models/friend';
import { User } from 'src/app/models/user';

type UserFormData = {
  name: string,
  email: string,
  phone: string,
  password1: string,
  password2: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {


  usersUrl = 'http://localhost:3000/users';

  user: User;

  friendsList: Friend[] = [
    {
      id: 12,
      name: 'Joe'
    },
    {
      id: 22,
      name: "Jill"
    }
  ]



  constructor(private http: HttpClient) { }

  async registerUser(userFormData: UserFormData): Promise<User> {
    const user = await this.userFormDataToUser(userFormData)
    return this.http.post<User>(this.usersUrl, user)
      .pipe(
        catchError(this.handleError)
      ).toPromise();
  }

  login(email: string, password: string) {
    return this.http.get<User[]>(`${this.usersUrl}?email=${email}&password=${password}`)
      .pipe(map(users => {
        if (users.length > 0) {
          this.user = users[0];
          return;
        }
        throw new Error('Invalid credentials');
      }));
  }

  editUser(name: string, email: string, phone: string) {
    this.http.put<User>(`${this.usersUrl}/${this.user.id}`,
      { ...this.user, name, email, phone }).subscribe({
        next: ((user: User) => {
          this.user = user;
        }).bind(this),
        error: () => {}
      });
  }

  addFriend(id: number) {
    return this.http.get<User>(`${this.usersUrl}/${id}`)
      .subscribe({
        next: ((user: User) => {
          console.log(user.id, user.name);
          this.friendsList.push({id: user.id, name: user.name})
      }).bind(this)
    });
  }

  /*
  ** Converts type UserFormData (the object created by filling out signup form)
  ** to type User (the object stored in the database)
  */
  private async userFormDataToUser({ name, email, phone, password1: password }: UserFormData): Promise<User> {
    // normally the ID would be generated on the backend, but since we don't have a
    // sophisticated backend, we can just generate it by incrementing the number of users
    const id = (await this.http.get<User[]>(this.usersUrl).toPromise()).length + 1

    return { id, name, email, phone, password };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
