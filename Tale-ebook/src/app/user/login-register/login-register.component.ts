import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

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

 
  constructor(private _elementRef:ElementRef,private router: Router, private authService: AuthService,private http:HttpClient) { }

  ngOnInit() {
    var s = document.createElement("script");
    s.type ="text/javascript";
    s.src= "../../../assets/pages/login.js";
  this._elementRef.nativeElement.appendChild(s);
  
  }
 
  
  onLogin(form: NgForm) {
    
    var user = {
      "email": this.login_email,
      "password": this.login_password
    };

    this.authService.login(user).then(
      r => {
        if (r == true)
          this.router.navigate(['/store']);
        else
          alert("Username or Password is Incorrect Please Try Again!");
      }
    ).catch(e => {
      alert('error fetching data');
    });
  }



  onRegister(form: NgForm) {
    var user = {
      "firstname": this.fname,
      "lastname": this.lname,
      "email": this.reg_email,
      "password": this.reg_password

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

}

}