import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-edit-profile',
  templateUrl: './author-edit-profile.component.html',
  styleUrls: ['./author-edit-profile.component.css']
})
export class AuthorEditProfileComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  onEditProfile(form:NgForm){


    if (form.invalid) {
      return;
    }
   form.resetForm();
  }
}
