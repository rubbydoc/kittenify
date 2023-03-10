import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../Services/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      address: [''],
      phone: [''],
      password: [''],
      password_confirmation:[''],
      role:['Normal']
    });
  }

  ngOnInit() {}

  registerUser() {
    // var formData: any = new FormData();
    // formData.append('role', 'Normal');
    this.authService.signUp(this.signupForm.value).subscribe(
      (res:any)=>{
        this.router.navigate(['login']);
      }
      
    );
  }
}
