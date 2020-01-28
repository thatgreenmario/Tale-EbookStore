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

 
  constructor(private _elementRef:ElementRef,private router: Router, private authService: AuthService,private http:HttpClient) { }

  ngOnInit() {
    var s = document.createElement("script");
    s.type ="text/javascript";
    s.src= "../../../assets/pages/login.js";
  this._elementRef.nativeElement.appendChild(s);
  
  }
 
  
  onLogin(form: NgForm) {
    
    if (form.invalid) {
      return;
    }
    
    if(this.authService.login(form.value.email, form.value.password)==false)
    alert( "Username or Password is Incorrect Please Try Again!");
    
    else
    this.router.navigate(['/store']);

  }



  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    if(this.authService.createUser(form.value.fname, form.value.lname, form.value.email, form.value.password)==false)
      form.resetForm();
    else 
     return;
  }


}



