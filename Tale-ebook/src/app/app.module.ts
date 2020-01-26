import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginRegisterComponent } from './user/login-register/login-register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './book/store/store.component';
import { LibraryComponent } from './book/library/library.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './book/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginRegisterComponent,
    HomeComponent,
    FooterComponent,
    StoreComponent,
    LibraryComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
