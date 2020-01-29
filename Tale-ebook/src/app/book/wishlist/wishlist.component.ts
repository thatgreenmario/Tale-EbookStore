import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  
  constructor(public bookservice :BookService) { 
    
  }

  
  booksPurchased : Book[];

  ngOnInit() {

    this.bookservice.getStoreBooks().then(
      r => {
        var bookobj = JSON.stringify(r);
        var bookObjArr = JSON.parse(bookobj);
        console.log(bookObjArr);
        this.booksPurchased = bookObjArr;

        /*        setTimeout(() => {
                  this.sortbyAuthor();
                }, 2000);*/

      }
    ).catch(e => {
      alert('error fetching data');
    }
    );

  }
  
}

