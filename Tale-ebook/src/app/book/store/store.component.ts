import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { JsonPipe } from '@angular/common';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;
  constructor(public bookservice: BookService) { }
  searchString="";
  searchBy="";

  ngOnInit() {
    console.log("inside store");
    this.bookservice.getStoreBooks().then(
      r => {
        var bookobj = JSON.stringify(r);
        var bookObjArr = JSON.parse(bookobj);
        console.log(bookObjArr);
        this.books = bookObjArr;

        /*        setTimeout(() => {
                  this.sortbyAuthor();
                }, 2000);*/

      }
    ).catch(e => {
      alert('error fetching data');
    }
    );

  }


  onAddToCart(event, book) {

    var status: string = this.bookservice.addToCart(book);

    alert(status);

  }

  // sortbyName() {
  //   console.log(this.books);
  //   var sortedArr = this.books.sort((book1, book2) => {
  //     if (book1.title.trim() > book2.title.trim()) {
  //       return 1;
  //     }
  //     if (book1.title.trim() < book2.title.trim()) {
  //       return -1;
  //     }
  //     return 0;
  //   });

  //   this.books = sortedArr;

  //   console.log(this.books, "sorted");

  // }

  // sortbyAuthor() {
  //   var sortedArr = this.books.sort((book1, book2) => {
  //     if (book1.authorName.trim() > book2.authorName.trim()) {
  //       return 1;
  //     }
  //     if (book1.authorName.trim() < book2.authorName.trim()) {
  //       return -1;
  //     }
  //     return 0;
  //   });

  //   this.books = sortedArr;
  //   console.log(this.books, "sorted");


  // }

  // searchBookByName(bookName: string) {
  //   this.bookservice.getBookByName(bookName).then(
  //     r => {
  //       var bookobj = JSON.stringify(r);
  //       var bookObjArr = JSON.parse(bookobj);
  //       console.log(bookObjArr);
  //       this.books = bookObjArr;

  //     }
  //   ).catch(e => {
  //     alert('error fetching data');
  //   }
  //   );
  // }

  //for details page


  // sortbyPrice() {
  //   var sortedArr = this.books.sort((book1, book2) => {
  //     if (book1.price > book2.price) {
  //       return 1;
  //     }
  //     if (book1.price < book2.price) {
  //       return -1;
  //     }
  //     return 0;
  //   });

  //   this.books = sortedArr;
  //   console.log(this.books, "sorted");


  // }





  searchBookByISBN(isbnNumber: string) {
    this.bookservice.getBookByISBN(isbnNumber).then(
      r => {
        var bookobj = JSON.stringify(r);
        var bookObjJSON = JSON.parse(bookobj);
        console.log(bookObjJSON);
        this.selectedBook = bookObjJSON;

      }
    ).catch(e => {
      alert('error fetching data');
    }
    );
  }



  //On sort
  onSort(val){

if(val=="name")
{
  var sortedArr = this.books.sort((book1, book2) => {
    if (book1.title.trim() > book2.title.trim()) {
      return 1;
    }
    if (book1.title.trim() < book2.title.trim()) {
      return -1;
    }
    return 0;
  });

  this.books = sortedArr;

}
if(val=="authorName")
{

  var sortedArr = this.books.sort((book1, book2) => {
    if (book1.authorName.trim() > book2.authorName.trim()) {
      return 1;
    }
    if (book1.authorName.trim() < book2.authorName.trim()) {
      return -1;
    }
    return 0;
  });

  this.books = sortedArr;
}


if(val=="price")
{
    var sortedArr = this.books.sort((book1, book2) => {
      if (book1.price > book2.price) {
        return 1;
      }
      if (book1.price < book2.price) {
        return -1;
      }
      return 0;
    });

    this.books = sortedArr;
    console.log(this.books, "sorted");

}
  }



onSearch(form: NgForm){


  if(this.searchBy=="name")
  {
      this.bookservice.getBookByName(this.searchString).then(
        r => {
          var bookobj = JSON.stringify(r);
          var bookObjArr = JSON.parse(bookobj);
          console.log(bookObjArr);
          this.books = bookObjArr;

        }
      ).catch(e => {
        alert('error fetching data');
      }
      );
    }


  if(this.searchBy=="author")
  {

  }
}






////////for details
onGetDetails(event,book)
{

  this.bookservice.setBookDetails(book);

}

}





