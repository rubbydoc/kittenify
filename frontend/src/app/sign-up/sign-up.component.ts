import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error =  [];



  constructor(private http:HttpClient,
    private Token: TokenService,
    private router: Router,
    // private Auth: AuthService
    ){}
  onSubmit() {
    console.log(this.error);
    return this.http.post('http://localhost:8000/api/register',this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/home');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
