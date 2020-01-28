import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(public bookservice :BookService) { }

  ngOnInit() {
 
  }
  
books : Book[]= this.bookservice.getStoreBooks();

onAddToCart(event,book)
{
 
 var status: string = this.bookservice.addToCart(book);

    alert(status);

}

}