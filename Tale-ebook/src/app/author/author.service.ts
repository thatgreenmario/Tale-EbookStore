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

    return this.http.post("http://localhost:5000/validate", author).toPromise()
      .then(r => {
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  registerAuthor(author) {
    return this.http.post("http://localhost:5000/registerAuth", author).toPromise()
      .then(r => {
        console.log(r);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }


  getAuthorBookList(authorid: string) {
    //return this.booksInStore;
    return this.http.get("http://localhost:5000/getlist/" + authorid).toPromise()
      .then(r => {
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });

  }


  addBookToList(book:Book)
  {
    return this.http.post("http://localhost:5000/addbook", book).toPromise()
      .then(r => {
        console.log(r);
        return r;
      }).catch(error => {
        return Promise.reject(error);
      });
  }

}
