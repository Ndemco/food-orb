import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuItem } from 'src/app/models/menuItem';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: MenuItem;
  private sub: Subscription;

  constructor(public menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.menuService.getMenu(+params.id).subscribe(menuItems => {
        this.menu = menuItems[0];
        console.log('printing menu');
        console.log(this.menu);
      });
    })
  }

}
