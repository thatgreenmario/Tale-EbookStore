import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  books: Book[] = [];
  constructor(public bookservice: BookService) { }

  ngOnInit() {
    console.log("inside store");
    this.bookservice.getStoreBooks().then(
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



  onAddToCart(event, book) {

    var status: string = this.bookservice.addToCart(book);

    alert(status);

  }

}


