import { CatBreedComponent } from './cat-breed/cat-breed.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LostnfoundComponent } from './lostnfound/lostnfound.component';
import { CatproductsComponent } from './catproducts/catproducts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: NavbarComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: 'lostnfound',
    component: LostnfoundComponent
  },
  {
    path: 'cat-breeds',
    component: CatBreedComponent
  },
  {
    path: 'catproducts',
    component: CatproductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
