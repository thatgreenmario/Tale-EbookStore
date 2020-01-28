import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private _elementRef:ElementRef) { }

  ngOnInit() {

  }

  onClickLogout() {
    this.authService.logout();

  }
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    // s.src= "../../assets/pages/header.js";
    this._elementRef.nativeElement.appendChild(s);

  }

}
