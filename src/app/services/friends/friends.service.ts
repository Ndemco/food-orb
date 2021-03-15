import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friend } from 'src/app/models/friend';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  usersUrl = 'http://localhost:3000/users';

  users: Friend[] = [];

  constructor(private http: HttpClient) {
    this.http.get<User[]>(this.usersUrl).subscribe({
      next: (users: User[]) => {
        for (var user of users) {
          this.users.push({ id: user.id, name: user.name })
        }
      }
    })
  }

}
