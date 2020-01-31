import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { Observable } from 'rxjs';
import { LoginRegisterComponent } from '../user/login-register/login-register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isAuthor$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  firstName$: Observable<string>;



  constructor(private authService: AuthService  ) { }


  ngOnInit() {
    
    this.firstName$ = LoginRegisterComponent.firstName.asObservable();    
    this.isLoggedIn$= this.authService.isLoggedIn;
    this.isAuthor$=LoginRegisterComponent.isauthor.asObservable();
    this.isAuthor$=LoginRegisterComponent.isadmin.asObservable();
    }

  onClickLogout(){
    this.authService.logout();
    
    LoginRegisterComponent.isauthor.next(false);
    LoginRegisterComponent.isadmin.next(false);
  
  
  }


}