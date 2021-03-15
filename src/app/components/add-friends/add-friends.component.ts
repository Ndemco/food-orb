import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Friend } from 'src/app/models/friend';
import { FriendsService } from 'src/app/services/friends/friends.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {

  users: Friend[];

  constructor(private friendsService: FriendsService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.friendsService.users;
  }

  addFriend(id: number) {
    this.userService.addFriend(id);
    this.router.navigate(['home'])
  }

}
