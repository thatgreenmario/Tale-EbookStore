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


  constructor(public bookService: BookService) {

  }

  ngOnInit() {
    this.booksInCart = [];
    var userid = sessionStorage.getItem("userId");
    this.bookService.getCartBooks().then(
      r => {
        console.log(r);
        var bookobj = JSON.stringify(r);
        var bookObjArr = JSON.parse(bookobj);
        console.log(bookObjArr);
        //this.booksInCart = bookObjArr;

        bookObjArr.forEach(bookobj => {
          //console.log(userid);
          if (bookobj._id === userid)
          {
            bookobj.isbn.forEach(isbn => {
              console.log(isbn);
              this.getbooks(isbn);
            });
          }
        });


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

  getbooks(isbnString: string) {
    this.bookService.getBookByISBN(isbnString).then(
      r => {
        var bookobj = JSON.stringify(r);
        var bookObjArr = JSON.parse(bookobj);
        console.log(bookObjArr);
        this.booksInCart.push(bookObjArr);

        /*        var someStr = this.book.description;
                this.bookdesc = someStr.replace(/['"]+/g, '');
                console.log(someStr.replace(/['"]+/g, ''));
        
                console.log(this.bookdesc);*/

        this.cartTotal += bookObjArr.price;
      }
    ).catch(e => {
      alert('error fetching data');
    }
    );
  }

  onRemoveFromCart(event, book: Book) {
    // Item to remove
    
    console.log("trying to remove ");
    var books=[];
    books.push(book.isbn);
    console.log(books);
    var bookobj={
      "_id":sessionStorage.getItem("userId"),
      "userid":sessionStorage.getItem("userId"),
      "books":books
    };

    console.log(bookobj);
    this.bookService.removeFromCart(bookobj).then(
      r => {
        console.log(r);
      }
    ).catch(e => {
     // alert('error fetching data');
    }
    );

  }

}

