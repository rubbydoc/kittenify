import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}


    // User registration
    register(user: User): Observable<any> {
      return this.http.post('http://localhost:8000/api/register', user);
    }
    // Login
    signin(user: User): Observable<any> {
      return this.http.post<any>('http://localhost:8000/api/login', user);
    }

    profileUser(): Observable<any> {
      return this.http.get('http://127.0.0.1:8000/api/user-profile');
    }
}
