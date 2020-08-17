import { Component, OnInit } from '@angular/core';

import { Login } from './model/login';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login;
  public submitted: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.login = new Login();
  }

  onSubmit() {
    this.submitted = true;

  }

  Login() {
    this.loginService.Login(this.login)
      .subscribe(
        data => {

        }, err => {

        }
      );
  }

}
