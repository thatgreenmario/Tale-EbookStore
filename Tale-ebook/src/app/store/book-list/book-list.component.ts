import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/books/book.model';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
books : Book[]= BookService.getStoreBooks();

onAddToCart(event,book)
{
 BookService.addToCart(book);
}

}
