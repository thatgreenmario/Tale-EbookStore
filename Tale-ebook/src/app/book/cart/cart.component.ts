import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartTotal = 0;
  discount = 0;
  booksInCart: Book[];/*= this.bookservice.getCartBooks(); */


  constructor(public bookservice: BookService) {

  }


 
  ngOnInit() {
    this.booksInCart=[];
    this.bookservice.getCartBooks().then(
      r => {
        var bookobj = JSON.stringify(r);
        var bookObjArr = JSON.parse(bookobj);
        console.log(bookObjArr);
        this.booksInCart = bookObjArr;

        /*        setTimeout(() => {
                  this.sortbyAuthor();
                }, 2000);*/

        var price = 0;
        for (let i = 0; i < this.booksInCart.length; i++) {
          price += this.booksInCart[i].price;
          this.cartTotal = price;
        }
        console.log(this.booksInCart.length);

      }
    ).catch(e => {
      alert('error fetching data');
    }
    );


  }

  onRemoveFromCart(event, book: Book) {
    // Item to remove
    this.booksInCart = this.booksInCart.filter(obj => obj !== book);
  }

}

