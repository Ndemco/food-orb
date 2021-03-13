import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Restaurant } from 'src/app/models/reastaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurantsUrl = 'http://localhost:3000/restaurants'

  chosenRestaurant: Restaurant;
  constructor(private http: HttpClient) { }

  async getRestaurants(location: string) {
    return this.http.get<Restaurant[]>(`${this.restaurantsUrl}?location=${location}`)
      .pipe(catchError(this.handleError)).toPromise()
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
