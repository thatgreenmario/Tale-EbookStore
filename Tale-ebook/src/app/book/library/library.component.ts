import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(public bookservice: BookService) { }

  ngOnInit() {
  }

  books : Book[]= this.bookservice.getLibraryBooks();  
  
  


}
