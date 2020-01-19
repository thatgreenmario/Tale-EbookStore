import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/books/book.model';

@Component({
  selector: 'app-my-book-list',
  templateUrl: './my-book-list.component.html',
  styleUrls: ['./my-book-list.component.css']
})
export class MyBookListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  books : Book[]=[{  id: "book2",
  title: "The Alchemist",
  author: "Paulo Coelho",
  price: 200,
  genre: "Fiction",
  publication:"Harper",
  Language: "English",
  Description:"Santiago, an Andalusian shepherd boy, looks to travel the world in the quest to find a worldly treasure, unlike any others. Santiago’s quest takes him to the magical desert of Egypt, where he meets the alchemist. Is the alchemist what Santiago was looking for, or is he there to stop Santiago from fulfilling his quest? Well, you’ll have to read The Alchemist to find out.",
  imagePath: "assets/images/book2.jpg",
  bookPath: "assets/pdf/book1.pdf",
  booktrailer: "https://www.youtube.com/watch?v=tLNadHuYPTU",    
  ISBN: "9788172234980"
  },
  {  id: "book3",
  title: "Wings of Fire",
  author: "Tiwari Arun",
  price: 260,
  genre: "Biography",
  publication:"Sangam Books Ltd",
  Language: "English",
  Description:"One of the most inspiring and popular autobiographies to read is Late Abdul Kalam’s Wings of Fire. In this book, the former president shares his personal experiences and minutest details of his life. It narrates his life, right from the former late president’s rise from humble beginnings to his vision for the country in the year 2020. It has been divided into four parts equally. The first part narrates his early life that includes his parents, teachers and other influential role models. The second part deals with Kalam’s further education, work experience and his involvement with the military projects. The third and the fourth parts are about his ISRO career and the last phase of his life, where he was bestowed upon with several awards and honours. Buy Wings of Fire: An Autobiography online to read more about this great personality who played a pivotal role in shaping our country’s future.",
  imagePath: "assets/images/book3.jpg",
  bookPath: "assets/pdf/book1.pdf",
  booktrailer: "",    
  ISBN: "9788173711466"
  }];
  
  
  



}
