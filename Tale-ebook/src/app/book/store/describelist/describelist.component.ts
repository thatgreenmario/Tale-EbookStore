import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-describelist',
  templateUrl: './describelist.component.html',
  styleUrls: ['./describelist.component.css']
})
export class DescribelistComponent implements OnInit {

  constructor(private bookService: BookService) { }

  book;
  ngOnInit() {
    this.book  = this.bookService.getBookDetails();
    console.log(this.bookService.getBookByISBN(this.book.isbn));
  }




}
