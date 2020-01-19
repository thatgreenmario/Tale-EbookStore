import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { HeaderComponent } from './header/header/header.component';
import { AngularMaterialModule } from './angular-material.module';
import { RegisterComponent } from './home/register/register.component';
import { IndexComponent } from './index/index/index.component';
import { BookListComponent } from './store/book-list/book-list.component';
import { CategoriesComponent } from './store/categories/categories/categories.component';
import { StoreComponent } from './store/store.component';
import { MyBookListComponent } from './library/my-book-list/my-book-list.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    IndexComponent,
    BookListComponent,
    CategoriesComponent,
    StoreComponent,
    MyBookListComponent,
    LibraryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
