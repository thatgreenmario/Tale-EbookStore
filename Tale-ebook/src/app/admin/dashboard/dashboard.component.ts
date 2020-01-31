import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

users: User[]=[
  {
     id: "w243435345",
      firstName: "kdnfvsa",
      lastName: "ddshdvknv",
      email: "kdjbvdmv@jhdhs.com",
      password: "sasvdvd",
      role: "sasfs",
      isAuthor: 1,
  },
  {
    id: "w243435345",
     firstName: "kdnfvsa",
     lastName: "ddshdvknv",
     email: "kdjbvdmv@jhdhs.com",
     password: "sasvdvd",
     role: "sasfs",
     isAuthor: 1,
 },
 {
  id: "w243435345",
   firstName: "kdnfvsa",
   lastName: "ddshdvknv",
   email: "kdjbvdmv@jhdhs.com",
   password: "sasvdvd",
   role: "sasfs",
   isAuthor: 1,
}
]



}
