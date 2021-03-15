import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/models/friend';
import { FriendsService } from 'src/app/services/friends/friends.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  users: Friend[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.friendsList
  }

}
