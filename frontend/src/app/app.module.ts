import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LostnfoundComponent } from './lostnfound/lostnfound.component';
import { FormsModule } from '@angular/forms';
import { CatBreedComponent } from './cat-breed/cat-breed.component';
import { CatproductsComponent } from './catproducts/catproducts.component';
import { HeaderComponent } from './header/header.component';
import { RehomeComponent } from './rehome/rehome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CatvitaminsComponent } from './catvitamins/catvitamins.component';
import { RehomeFormComponent } from './rehome-form/rehome-form.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { AdoptCatComponent } from './adopt-cat/adopt-cat.component';
import { AdoptionDetailComponent } from './adoption-detail/adoption-detail.component';
import { LostnfoundDetailComponent } from './lostnfound-detail/lostnfound-detail.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    LostnfoundComponent,
    CatBreedComponent,
    CatproductsComponent,
    HeaderComponent,
    RehomeComponent,
    AboutComponent,
    CatvitaminsComponent,
    RehomeFormComponent,
    AdoptionComponent,
    AdoptCatComponent,
    AdoptionDetailComponent,
    LostnfoundDetailComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
