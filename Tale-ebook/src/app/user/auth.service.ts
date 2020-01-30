import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  redirectUrl: string;
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;

  constructor(private http: HttpClient, private router: Router) { }


  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(user) {

    console.log(user);

    return this.http.post("http://localhost:5000/authenticate", user).toPromise()
      .then(r => {
        if (r !== null) {
          console.log(r);
          this.loggedIn.next(true);
        }
        else
          this.loggedIn.next(false);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  createUser(user) {
    return this.http.post("http://localhost:5000/register", user).toPromise()
      .then(r => {
        console.log(r);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/userLogin']);
  }



  EditProfile(fname: string, lname: string, oldPassword: string, newPassword: string) {
    if (oldPassword == newPassword)
      return "Old Password and New Password Should not be same!!!";
    if (oldPassword == "johnDoe1234")
      return "Password Changed Successfully!";
    else
      return "Old Password does not match!!";
  }


}