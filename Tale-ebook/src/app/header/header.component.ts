import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private _elementRef:ElementRef) { }

  ngOnInit() {
  
  
  
  }

  ngAfterViewInit(){
  
    
    var s = document.createElement("script");
    s.type ="text/javascript";
   // s.src= "../../assets/pages/header.js";
  this._elementRef.nativeElement.appendChild(s);
  
  }

}
