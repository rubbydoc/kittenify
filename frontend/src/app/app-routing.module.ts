import { AdoptionComponent } from './adoption/adoption.component';
import { CatBreedComponent } from './cat-breed/cat-breed.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LostnfoundComponent } from './lostnfound/lostnfound.component';
import { CatproductsComponent } from './catproducts/catproducts.component';
import { CatvitaminsComponent } from './catvitamins/catvitamins.component';
import { RehomeFormComponent } from './rehome-form/rehome-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RehomeComponent } from './rehome/rehome.component';
import { AdoptCatComponent } from './adopt-cat/adopt-cat.component';



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
    path: 'cat-products',
    component: CatproductsComponent

  },
  {
    path: 'rehome',
    component: RehomeComponent
  },
  {
    path: 'cat-vitamins',
    component: CatvitaminsComponent
  },
  {
    path: 'adoption',
    component: AdoptionComponent
  },
  {
    path: 'rehome-form',
    component: RehomeFormComponent
  },
  {
    path: 'adoption/:id',
    component: AdoptCatComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
