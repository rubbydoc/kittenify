import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { TokenService } from '../Services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  isSignedIn!: boolean;
  constructor(
    public auth: AuthService,
    public router: Router,
    public token: TokenService
  ) {}
  ngOnInit() {
    
  }
  // Signout


  logout() {
    this.auth.doLogout();
  }

}
