import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  
  }

  onClickLogout(){
    this.authService.logout();
  }

}
