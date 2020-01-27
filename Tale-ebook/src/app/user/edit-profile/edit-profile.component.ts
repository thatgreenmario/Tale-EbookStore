import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onEditProfile(form:NgForm){


    if (form.invalid) {
      return;
    }
    
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.

    var status: string = this.authService.EditProfile(form.value.fname,form.value.lname,form.value.password,form.value.newpassword);

    alert(status);
    form.resetForm();
  }
}
