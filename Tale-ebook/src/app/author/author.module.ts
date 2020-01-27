import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './author-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { AuthorEditProfileComponent } from './author-edit-profile/author-edit-profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    AuthorHomeComponent,
    AuthorEditProfileComponent
  ],


  imports: [
    CommonModule,
    AuthorRoutingModule,
  FormsModule
  ]
})
export class AuthorModule { }
