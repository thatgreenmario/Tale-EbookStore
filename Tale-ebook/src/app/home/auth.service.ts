import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;


private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    
    //dummy data before integration with backend
    const authData = { email: email, password: password };

    if(email=="johndoe@gmail.com" && password=="johnDoe1234")
   { this.isLoggedIn=true;
     return true;}
    else
    return false;
  }


createUser(fname:string,lname:string,email:string,password:string){

  if(email=="johndoe@gmail.com")
  {
  alert(email +" is already a Tale Member! Please Login");
  return false;  
}
  else
  alert("User created:"+fname +"  "+lname+"  "+ email+"  "+password );
  return true;
}


changePassword(oldPassword:string, newPassword:string){
 
 if(oldPassword==newPassword)
 return "Old Password and New Password Should not be same!!!";
  if(oldPassword=="johnDoe1234")
  return "Password Changed Successfully!";
else
return "Old Password does not match!!";
}
      

changeDetails(fname:string, lname:string){
return "Details Changed Successfully!!"
}

logout(): void {
  this.isLoggedIn = false;
}

}