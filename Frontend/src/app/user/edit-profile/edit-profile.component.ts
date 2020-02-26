import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userid: string;
  fname: string;
  lname: string;
  userMail: string;
  old_password: string;
  new_password: string;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userid = sessionStorage.getItem("userId");
    this.fname = sessionStorage.getItem("username");
    this.lname = sessionStorage.getItem("username_l");
    this.userMail = sessionStorage.getItem("userMail");

  }
  onEditProfile(form: NgForm) {

    var user = {
      "id":parseInt(this.userid),
      "email": this.userMail,
      "password": this.new_password,
      "firstname": this.fname,
      "lastname": this.lname
    };

    this.authService.EditProfile(user).then(
      r => {
        if (r != null) {
          var userobj1 = JSON.stringify(r);
          var userobj2 = JSON.parse(userobj1);
          this.userMail = userobj2.email;
          //this.authorName = authorobj2.authorName;
          this.fname = userobj2.firstname;
          this.lname = userobj2.lastname;
        }
        else
          alert("Username or Password is Incorrect Please Try Again!");
      }
    ).catch(e => {
      alert('error fetching data');
    });
  }
}
