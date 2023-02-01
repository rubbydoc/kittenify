import { AuthGuard } from './Services/auth.guard';
import { LostnfoundDetailComponent } from './lostnfound-detail/lostnfound-detail.component';
import { AdoptionDetailComponent } from './adoption-detail/adoption-detail.component';
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
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdoptionFormComponent} from './adoption-form/adoption-form.component'



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
    path: 'register',
    component: SignUpComponent
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
    component: AdoptionDetailComponent
  },
  {
    path: 'lostnfound/:status/:id',
    component: LostnfoundDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'admin-users',
    component: AdminUsersComponent
  },
  {
    path: 'admin-products',
    component: AdminProductsComponent
  },
  {
    path: 'adoption-form',
    component: AdoptionFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
