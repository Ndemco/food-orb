import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/models/menuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menusUrl = 'http://localhost:3000/menus';

  constructor(private http: HttpClient) { }

  getMenu(restaurantId: number) {
    return this.http.get<MenuItem[]>(`${this.menusUrl}?restaurantId=${restaurantId}`);
  }
}
