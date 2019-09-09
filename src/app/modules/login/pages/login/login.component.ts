import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/http/login.service';
import { Router } from '@angular/router';
import { LoginRequestModel } from '../../models/login-request-model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {

  login: LoginRequestModel = {

    username: '',

    password: ''

  }

  constructor(

    private loginService: LoginService,

    private snackBar: MatSnackBar,

    private router: Router

  ) { }

  ngOnInit() {

    this.checkLogin();

  }

  checkLogin() {

    if (localStorage.getItem('loggedIn') == 'true') {

      this.router.navigate(['/']);

    }

  }

  onLogin() {

    this.loginService.login(this.login).subscribe(loginSucceded => {

      console.log(loginSucceded);

      if (loginSucceded.length === 1) {

        localStorage.setItem('userName', this.login.username);
  
        localStorage.setItem('loggedIn', 'true');
  
        let userName = localStorage.getItem('userName');
  
        this.snackBar.open(`Welcome back ${userName} :)`, 'Dismiss', { duration: 2000 });
  
        this.router.navigate(['/']);

      } else {
        
        this.snackBar.open(`Sorry!. It seems like user name or password are incorrect...`, 'Dismiss', { duration: 2000 });

      }

    }, error => {

      localStorage.setItem('loggedIn', 'false');

      this.snackBar.open('Login Failed, please try again...', 'Dismiss', { duration: 2000 });

    });

  }

}
