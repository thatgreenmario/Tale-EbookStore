import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   cartTotal=0; 
  booksInCart : Book[]= BookService.getCartBooks();
}

