import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book/book.service';
import { Book } from '../../book/book.model';


@Component({
  selector: 'app-prev-orders',
  templateUrl: './prev-orders.component.html',
  styleUrls: ['./prev-orders.component.css']
})
export class PrevOrdersComponent implements OnInit {

  constructor(public bookService :BookService) { 
    
  }

  
  booksPurchased : Book[]=[];

  ngOnInit() {

    var userid = sessionStorage.getItem("userId");
    this.bookService.getLibraryBooks(userid).then(
      r => {
        console.log(r);
        var bookobj = JSON.stringify(r);
        var bookObjArr = JSON.parse(bookobj);
        console.log(bookObjArr);
        //this.booksInCart = bookObjArr;
  
        this.booksPurchased = bookObjArr;
        
        /*var price = 0;
        for (let i = 0; i < this.booksInCart.length; i++) {
          price += this.booksInCart[i].price;
          this.cartTotal = price;
        }
        console.log(this.booksInCart.length);
  */
      }
    ).catch(e => {
      alert('error fetching data');
    }
    );
  
  }
  



}

