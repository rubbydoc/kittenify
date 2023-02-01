import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from '../Services/auth-state.service';
import { AuthService } from '../Services/auth.service';
import { TokenService } from '../Services/token.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
