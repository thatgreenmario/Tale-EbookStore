import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isnotLoggedIn$:Observable<boolean>;
  constructor(private authService: AuthService, private _elementRef:ElementRef) { }


  ngOnInit() {
     this.isLoggedIn$= this.authService.isLoggedIn;
  }

  onClickLogout(){
    this.authService.logout();
  }


}