import { Component, OnInit,ElementRef } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../assets/pages/payment.js";
    this._elementRef.nativeElement.appendChild(s);

  }

}
