import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from '../author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-edit-profile',
  templateUrl: './author-edit-profile.component.html',
  styleUrls: ['./author-edit-profile.component.css']
})
export class AuthorEditProfileComponent implements OnInit {

  authorName: string;
  fname: string;
  lname: string;
  email: string;
  old_password: string;
  new_password: string;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    if (sessionStorage.getItem("authorID")) {
      this.fname = sessionStorage.getItem("authorName").split(" ")[0];
      this.lname = sessionStorage.getItem("authorName").split(" ")[1];
      this.email = sessionStorage.getItem("authorEmail");
    } else {
      console.log("no author has logged in yet");
    }
  }
  onEditProfile(form: NgForm) {
    var author = {
      "email": this.email,
      "password": this.new_password,
      "authorName": this.fname + " " + this.lname
    };

    this.authorService.editAuthor(author).then(
      r => {
        if (r != null) {
          var authorobj1 = JSON.stringify(r);
          var authorobj2 = JSON.parse(authorobj1);
          this.email = authorobj2.email;
          this.authorName = authorobj2.authorName;
          this.fname = this.authorName.split(" ")[0];
          this.lname = this.authorName.split(" ")[1];
        }
        else
          alert("Username or Password is Incorrect Please Try Again!");
      }
    ).catch(e => {
      alert('error fetching data');
    });
  }
}