import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/reastaurant';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() restaurants: Restaurant[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToMenu(id: number) {
    this.router.navigate(['menu', id]);
    console.log('function executed')
  }

}
