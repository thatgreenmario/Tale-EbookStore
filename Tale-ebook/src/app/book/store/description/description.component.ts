import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-describelist',
  templateUrl: './describelist.component.html',
  styleUrls: ['./describelist.component.css']
})
export class DescribelistComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

book= this.bookService.getBookDetails();


}
