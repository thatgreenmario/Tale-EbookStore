import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
    var userid = sessionStorage.getItem("userId");
    var userbookmap = {
      user: {
        "id": userid,
        "firstname": sessionStorage.getItem("username"),
        "email": sessionStorage.getItem("userMail")
      },
      bookmap: {

      }
    }


    this.bookService.getCartBooks().then(
      r => {
        console.log(r);
        var bookobj = JSON.stringify(r);
        var bookObjArr = JSON.parse(bookobj);
        console.log(bookObjArr);
        //this.booksInCart = bookObjArr;

        bookObjArr.forEach(bookobj => {
          //console.log(userid);
          if (bookobj._id === userid) {
            bookobj.isbn.forEach(isbn => {
              console.log(isbn);
              userbookmap.bookmap[isbn] = "1";
            });
          }
        });

        console.log(userbookmap);
        this.bookService.generatebill(userbookmap).then(
          r => {
            console.log(r);
          }
        ).catch(e => {
          alert('the generated bill has been sent to your mail id');
        });


      }).catch(e => {
        alert('error fetching data');
      }
      );
  }

}
