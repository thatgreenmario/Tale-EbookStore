import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books : Book[];
  constructor(public bookService: BookService) { }

  ngOnInit() {

    this.books = [];
    var userid = sessionStorage.getItem("userId");
    this.bookService.getLibraryBooks(userid).then(
      r => {
        console.log(r);
        var bookobj = JSON.stringify(r);
        var bookObjArr = JSON.parse(bookobj);
        console.log(bookObjArr);
        //this.booksInCart = bookObjArr;

        this.books = bookObjArr;
        
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
