import { LoginComponent } from './../login.component';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string;
  private headers = new HttpHeaders().set('content-type','application/json');

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
   }

   public Login(login: Login): Observable<Login> {
    return this.http.post<Login>(this.baseUrl + "api/login/login", this.headers);
   }
}
