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
  cartTotal =0;
  booksInCart : Book[]= BookService.getCartBooks();

  ngOnInit() {
      var price=0;
      for(let i=0; i<this.booksInCart.length; i++){
        price+=this.booksInCart[i].price;
        this.cartTotal= price;
    }

  }
  
  onRemoveFromCart(event,book:Book)
  {
     // Item to remove
this.booksInCart = this.booksInCart.filter(obj => obj !== book);
  }

}

