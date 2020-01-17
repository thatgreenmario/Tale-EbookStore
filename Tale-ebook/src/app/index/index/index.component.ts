import { Component, OnInit } from '@angular/core';

import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/home/login/login.component';
import { RegisterComponent } from 'src/app/home/register/register.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
]



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
