import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthorService } from '../author.service';
import { Book } from 'src/app/book/book.model';
import * as $ from 'jquery'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  authorID: string;
  authorName: string;
  bookList: Book[] = [];
  totalIncome: number = 0;
  totalBooks: number = 0;
  totalBooksSold: number = 0;
  totalBooksPrice: number = 0;

  constructor(private _elementRef: ElementRef, private authorService: AuthorService) { }

  ngOnInit() {
    if (sessionStorage.getItem("authorID")) {
      this.authorID = sessionStorage.getItem("authorID");
      //this.authorID = '1';
      this.getBooksByAuthor();
    } else {
      console.log("no author has logged in yet");
    }

    /* //javascript handling the progress bars
     var s = document.createElement("script");
     s.type ="text/javascript";
     s.src= "../../../assets/pages/progress.js";
   this._elementRef.nativeElement.appendChild(s);
   */
  }

  items = [1, 2, 3];

  getBooksByAuthor() {
    this.authorService.getAuthorBookList(this.authorID).then(
      r => {
        var bookobj = JSON.stringify(r);
        var bookObjArr = JSON.parse(bookobj);
        //console.log(bookObjArr);
        this.bookList = bookObjArr;
        this.authorName = this.bookList[0].authorName.trim();
        this.getTotalBooks();
        this.getTotalBooksSold();
        this.getTotalIncome();

        //set the progressbars

        this.setprogressbars();
      }
    ).catch(e => {
      alert('error fetching data');
    }
    );
  }

  getTotalBooks() {
    this.bookList.forEach((bk) => {
      this.totalBooks += bk.quantity;
    });
  }

  getTotalBooksPrice() {
    this.bookList.forEach((bk) => {
      this.totalBooksPrice += (bk.price * bk.quantity);
    });
  }

  getTotalBooksSold() {
    this.bookList.forEach((bk) => {
      this.totalBooksSold += bk.sold;
    });
  }

  getTotalIncome() {
    this.bookList.forEach((bk) => {
      this.totalIncome += (bk.sold * bk.price);
    });
  }

  setprogressbars() {
    var progress1 = (this.totalIncome / this.totalBooksPrice) * 100;
    var progress2 = (this.totalBooksSold / this.totalBooks) * 100;
    $(document).ready(function () {
      $('#progressbar1').css('width', progress1 + '%').attr('aria-valuenow', progress1);
      $('#progressbar2').css('width', progress2 + '%').attr('aria-valuenow', progress2);
    });
  }

}
