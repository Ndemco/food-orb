import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user: User;
  editForm: any;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.editForm = this.fb.group({
      name: [{ value: userService.user.name, disabled: true }, Validators.required],
      email: [{ value: userService.user.email, disabled: true }, [Validators.required, Validators.email]],
      phone: [{ value: userService.user.phone, disabled: true }, [Validators.required, Validators.minLength(10)]],
    })
  }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  handleEditUserSubmit() {
    this.userService.editUser(
      this.editForm.value.name, this.editForm.value.email, this.editForm.value.phone
    );
    this.router.navigate(['home']);
  }

  enableForm() {
    this.editForm.controls.name.enable();
    this.editForm.controls.email.enable();
    this.editForm.controls.phone.enable();
  }

}
