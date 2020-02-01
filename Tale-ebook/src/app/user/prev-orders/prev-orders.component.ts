import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book/book.service';
import { Book } from '../../book/book.model';


@Component({
  selector: 'app-prev-orders',
  templateUrl: './prev-orders.component.html',
  styleUrls: ['./prev-orders.component.css']
})
export class PrevOrdersComponent implements OnInit {

  constructor(public bookservice :BookService) { 
    
  }

  
  //booksPurchased : Book[]= this.bookservice.getLibraryBooks();

  ngOnInit() {
  }
  
}

