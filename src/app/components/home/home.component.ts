import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/reastaurant';
import { User } from 'src/app/models/user';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location: string

  viewFriends = false;

  restaurants: Restaurant[];
  restaurantsFound: boolean;
  constructor(private restaurantService: RestaurantService, public userService: UserService, private router: Router) { }

  user: User;
  ngOnInit(): void { }

  async handleSearchSubmit() {
    this.restaurants = await this.restaurantService.getRestaurants(this.location);

    console.log(this.restaurants.length);

    if (this.restaurants.length > 0) {
      this.restaurantsFound = true;
    } else {
      this.restaurantsFound = false;
    }
  }

  goToSettings() {
    this.router.navigate(['settings']);
  }

}


