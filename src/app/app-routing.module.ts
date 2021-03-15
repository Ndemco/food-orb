import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFriendsComponent } from './components/add-friends/add-friends.component';
import { FriendsComponent } from './components/friends/friends.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'menu/:id',
    component: MenuComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'find-friends',
    component: FriendsComponent
  },
  {
    path: 'add-friends',
    component: AddFriendsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
