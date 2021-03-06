import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private router: Router, private http: HttpClient) { }


  booksInCart: Book[] = [];

  booksInLibrary: Book[] = []


  booksInStore: Book[] = [];



  addToCart(bookobj) {
    return this.http.put("http://localhost:3000/getcart", bookobj).toPromise()
      .then(r => {
        console.log("book added");
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  removeFromCart(bookobj) {
    console.log(bookobj);
    return this.http.delete("http://localhost:3000/getcart", bookobj).toPromise()
      .then(r => {
        console.log("book deleted");
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  getCartBooks() {
    //return this.booksInCart;
    return this.http.get("http://localhost:3000/getcart").toPromise()
      .then(r => {
        console.log("here");
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  getStoreBooks() {
    //return this.booksInStore;
    return this.http.get("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/getall").toPromise()
      .then(r => {
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  getBookByISBN(isbn: string) {
    return this.http.get("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/search/isbn/" + isbn).toPromise()
      .then(r => {
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  getBookByName(bookName: string) {
    return this.http.get("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/search/" + bookName).toPromise()
      .then(r => {
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  getLibraryBooks(userid) {
    return this.http.get("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/getuserhistory/"+userid).toPromise()
    .then(r => {
      console.log("here");
      return r;
    }).catch(error => {
      return Promise.reject(error);
    });
  }



  book: Book;
  setBookDetails(book: Book) {
    this.book = book;
    this.router.navigate(['/describe']);
  }

  getBookDetails() {
    return this.book;
  }

  generatebill(userBookMap)
  {
    return this.http.post("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/generatebill",userBookMap).toPromise()
    .then(r => {
      console.log("here");
      return r;
    }).catch(error => {
      return Promise.reject(error);
    });
  }

}
