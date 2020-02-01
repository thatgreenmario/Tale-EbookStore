import { Injectable } from '@angular/core';
import { Author } from './author.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private router: Router, private http: HttpClient) { }


  validateAuthor(author) {

    console.log(author);

    return this.http.post("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/validate", author).toPromise()
      .then(r => {
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  registerAuthor(author) {
    return this.http.post("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/registerAuth", author).toPromise()
      .then(r => {
        console.log(r);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  editAuthor(author) {
    return this.http.post("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/editauthor", author).toPromise()
      .then(r => {
        console.log(r);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  getAuthorBookList(authorid: string) {
    //return this.booksInStore;
    return this.http.get("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/getlist/" + authorid).toPromise()
      .then(r => {
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });

  }


  addBookToList(book)
  {
    console.log(book);
    return this.http.post("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/addbook", book).toPromise()
      .then(r => {
        console.log(r);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  bookupload(bookpdf)
  {
    //console.log(book);
    return this.http.post("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/upload", bookpdf).toPromise()
      .then(r => {
        console.log(r);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

}
