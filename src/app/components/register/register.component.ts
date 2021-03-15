import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { mustMatch } from './pw-must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationError = false;

  registerForm: any;
  constructor(private fb: FormBuilder, public userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      password1: ['', Validators.required],
      password2: ['', Validators.required]
    }, {
      validator: mustMatch('password1', 'password2')
    })
  }

  ngOnInit(): void {
  }

  async handleRegisterUserSubmit() {
    const user = await this.userService.registerUser(this.registerForm.value);

    console.log(user);

    if (user) {
      this.userService.login(user.email, user.password).subscribe({
        next: () => this.router.navigate(['home']),
      });
    } else {
      this.registrationError = true;
    }
  }

}
