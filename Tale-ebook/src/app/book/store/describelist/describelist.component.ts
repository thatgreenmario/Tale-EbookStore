import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { Book } from '../../book.model';
import * as $ from 'jquery'

@Component({
  selector: 'app-describelist',
  templateUrl: './describelist.component.html',
  styleUrls: ['./describelist.component.css']
})
export class DescribelistComponent implements OnInit {

  constructor(private bookService: BookService) { }

  book: Book;
  book1: Book;
  bookdesc: string;
  ngOnInit() {
    this.book1 = this.bookService.getBookDetails();
    //console.log(this.bookService.getBookByISBN(this.book.isbn));

    this.bookService.getBookByISBN(this.book1.isbn).then(
      r => {
        var bookobj = JSON.stringify(r);
        var bookObjArr = JSON.parse(bookobj);
        console.log(bookObjArr);
        this.book = bookObjArr;

        /*        var someStr = this.book.description;
                this.bookdesc = someStr.replace(/['"]+/g, '');
                console.log(someStr.replace(/['"]+/g, ''));
        
                console.log(this.bookdesc);*/
        $(".book-description").html(this.book.description);

      }
    ).catch(e => {
      alert('error fetching data');
    }
    );
  }




}
