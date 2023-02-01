import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from './Services/auth-state.service';
import { TokenService } from './Services/token.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kittenify';

  

}
