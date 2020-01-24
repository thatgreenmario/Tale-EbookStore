import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/books/book.model';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-my-book-list',
  templateUrl: './my-book-list.component.html',
  styleUrls: ['./my-book-list.component.css']
})
export class MyBookListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  books : Book[]= BookService.getLibraryBooks();  
  
  



}
