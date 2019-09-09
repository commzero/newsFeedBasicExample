import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  login(loginForm: any) {

   return this.http.get<any>(environment.apiUrl + `users?username=${loginForm.username}&password=${loginForm.password}`);
   
  }

  isLogged() {

    return localStorage.getItem('loggedIn');

  }

  logout() {

    localStorage.setItem('loggedIn', 'false');

    localStorage.removeItem('userName');

  }

}
