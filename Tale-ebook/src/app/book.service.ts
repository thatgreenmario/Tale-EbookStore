import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Book } from './books/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  static booksInCart : Book[]=[
      {  id: "book3",
  title: "Wings of Fire",
  author: "Tiwari Arun",
  price: 260,
  genre: "Biography",
  publication:"Sangam Books Ltd",
  Language: "English",
  Description:"One of the most inspiring and popular autobiographies to read is Late Abdul Kalam’s Wings of Fire. In this book, the former president shares his personal experiences and minutest details of his life. It narrates his life, right from the former late president’s rise from humble beginnings to his vision for the country in the year 2020. It has been divided into four parts equally. The first part narrates his early life that includes his parents, teachers and other influential role models. The second part deals with Kalam’s further education, work experience and his involvement with the military projects. The third and the fourth parts are about his ISRO career and the last phase of his life, where he was bestowed upon with several awards and honours. Buy Wings of Fire: An Autobiography online to read more about this great personality who played a pivotal role in shaping our country’s future.",
  imagePath: "assets/images/book3.jpg",
  bookPath: "assets/pdf/book3.jpg",
  booktrailer: "",
  ISBN: "9788173711466"
  }];
  


  constructor(private http: HttpClient, private router: Router) {}

  static addToCart(book:Book)
  {
    this.booksInCart.push(book);
  }

  static getCartBooks() {
    return this.booksInCart;
  }

  
}
