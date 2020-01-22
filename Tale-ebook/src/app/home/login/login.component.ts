import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  
  constructor(public authService: AuthService,private router: Router) {}

  onLogin(form: NgForm) {
    
    if (form.invalid) {
      return;
    }
    
    if(this.authService.login(form.value.email, form.value.password)==false)
    alert( "Username or Password is Incorrect Please Try Again!");
    
    else
    this.router.navigate(['/store']);

  }

}
