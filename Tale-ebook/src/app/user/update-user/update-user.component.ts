import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

   user:User ={id:"1",firstName:"John",lastName:"Doe",email:"johndoe@gmail.com",password:"johnDoe123"};
  
   
  constructor() {
   
   }

  ngOnInit() {
  }

}
