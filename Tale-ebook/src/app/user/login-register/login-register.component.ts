import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthorService } from '../../author/author.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery'

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  login_email: string;
  login_password: string;

  fname: string;
  lname: string;
  reg_email: string;
  reg_password: string;
  checkAuthor: number;

  constructor(private _elementRef: ElementRef, private router: Router, private authService: AuthService, private http: HttpClient, private authorService: AuthorService) { }

  ngOnInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../assets/pages/login.js";
    this._elementRef.nativeElement.appendChild(s);

  }


  onLogin(form: NgForm) {

    var user = {
      "email": this.login_email,
      "password": this.login_password
    };

    this.authService.login(user).then(
      r => {
        console.log(r);
        if (r !== null) {
          if (r["isAuthor"] == 0) {
            sessionStorage.setItem("username", r["firstname"]);  
            sessionStorage.setItem("userId", r["id"]);  
          }
          else {

            var author = {
              "authorName": this.fname +" "+this.lname,
              "email": this.login_email,
              "password": this.login_password,
            };

            this.authorService.validateAuthor(author).then(
              r => {
                console.log(r);
                if (r !== null)
                {
                  sessionStorage.setItem("authorID",r["authorId"] );
                  console.log("sesssion element",sessionStorage.getItem("authorID"));
                }
                else
                  console.log("error fetching author data");
              }
            ).catch(e => {
              console.log('error fetching data');
            });

            sessionStorage.setItem("authorName", r["firstname"] + " " + r["lastname"]);
            sessionStorage.setItem("authorEmail", this.login_email);
          }
          this.router.navigate(['/store']);
        }
        else
          alert("Username or Password is Incorrect Please Try Again!");
      }
    ).catch(e => {
      alert("Username or Password is Incorrect Please Try Again!");
    });
  }



  onRegister(form: NgForm) {

    if ($("#checkAuthor").is(":checked")) {
      this.checkAuthor = 1;
    }
    else {
      this.checkAuthor = 0;
    }

    var user = {
      "firstname": this.fname,
      "lastname": this.lname,
      "email": this.reg_email,
      "password": this.reg_password,
      "isAuthor": this.checkAuthor
    };

    this.authService.createUser(user).then(
      r => {
        if (r == true)
          alert("Hi, " + user.firstname + ". Thankyou for registering. Please login to continue.")
        else
          alert("Hi, " + user.firstname + ". It seems you have already registered. Please login to continue, or click on forgot password to recover your password");
      }
    ).catch(e => {
      alert('error fetching data');
    });

    if (this.checkAuthor == 1) {

      var author = {
        "authorName": this.fname + this.lname,
        "email": this.reg_email,
        "password": this.reg_password,
      };

      this.authorService.registerAuthor(author).then(
        r => {
          if (r !== null)
            console.log("author registered");
          else
            console.log("author not registered");
        }
      ).catch(e => {
        alert('error fetching data');
      });
    }

  }

}