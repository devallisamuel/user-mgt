import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { SharedModule } from '../../shared/shared-module';
import { ILoginModel } from '../../core/models/login.model';


@Component({
  selector: 'app-login',
  imports: [...SharedModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginDetails: ILoginModel = {
    username: '',
    password: '',
  };

  visibility = signal(false);

  constructor(private router: Router) {}

  toggleVisibility() {
    return this.visibility.set(!this.visibility());
  }

  loginUser(credentials: NgForm) {
    console.log(credentials.value);
    this.router.navigate(['/dashboard']);
  }
}
