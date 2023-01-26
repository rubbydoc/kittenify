import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../Services/token.service';
import { AuthService } from '../Services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


public error = null;

  public form={
    email:null,
    password:null
  }

  constructor(private http:HttpClient,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
    ){}


  onSubmit() {
    this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error: { error: { error: null; }; })
   {
    this.error = error.error.error;
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    // this.Auth.changeAuthStatus(true);
    // this.router.navigateByUrl('/home');
  }
}
