import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    
    //dummy data before integration with backend
    const authData = { email: email, password: password };

    if(email=="abc@gmail.com" && password=="abc123")
    return true;
    else
    return false;
        }


createUser(fname:string,lname:string,email:string,password:string){

  alert("User created:"+fname +"  "+lname+"  "+ email+"  "+password );
  return true;
}



      }