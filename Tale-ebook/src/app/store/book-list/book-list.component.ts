import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/books/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }




  
books : Book[]=[{
  id: "book1",
  title: "Origin",
  author: "Dann Brown",
  price: 180,
  genre: "historical fiction",
  publication:"Doubleday",
  Language: "English",
  Description:"Origin is a 2017 mystery thriller novel by American author Dan Brown and the fifth installment in his Robert Langdon series, following Inferno. The book was released on October 3, 2017 by Doubleday. The book is predominantly set in Spain and features minor sections in Dubai and Budapest.",
  imagePath: "/assets/images/book1.jpg",
  bookPath: "assets/pdf/book1",
  booktrailer: "https://www.youtube.com/watch?v=XPoVknW-sig",    
  ISBN: "9781524779122"
}
,{  id: "book2",
title: "The Alchemist",
author: "Paulo Coelho",
price: 200,
genre: "Fiction",
publication:"Harper",
Language: "English",
Description:"Santiago, an Andalusian shepherd boy, looks to travel the world in the quest to find a worldly treasure, unlike any others. Santiago’s quest takes him to the magical desert of Egypt, where he meets the alchemist. Is the alchemist what Santiago was looking for, or is he there to stop Santiago from fulfilling his quest? Well, you’ll have to read The Alchemist to find out.",
imagePath: "assets/images/book2.jpg",
bookPath: "assets/pdf/book2",
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
bookPath: "assets/pdf/book3.jpg",
booktrailer: "",    
ISBN: "9788173711466"
},
{  id: "book4",
title: "Becoming",
author: "Michelle Obama",
price: 260,
genre: "Autobiography",
publication:"Viking",
Language: "English",
Description:"This is a rich, entertaining and candid memoir. And overall she's a fun person to sit alongside as she tells you the story of her life, warts and all. . . it is as beautifully written as any piece of fiction, with a similar warm languid tone to Ann Patchett's novel Commonwealth (Viv Groskop i, Five Stars)" ,
imagePath: "assets/images/book4.jpg",
bookPath: "assets/pdf/book4.jpg",
booktrailer: "https://www.youtube.com/watch?v=MqnF1I4oDVc",    
ISBN: "9780241334140"
}, {
  id: "book1",
  title: "Origin",
  author: "Dann Brown",
  price: 180,
  genre: "historical fiction",
  publication:"Doubleday",
  Language: "English",
  Description:"Origin is a 2017 mystery thriller novel by American author Dan Brown and the fifth installment in his Robert Langdon series, following Inferno. The book was released on October 3, 2017 by Doubleday. The book is predominantly set in Spain and features minor sections in Dubai and Budapest.",
  imagePath: "/assets/images/book1.jpg",
  bookPath: "assets/pdf/book1",
  booktrailer: "https://www.youtube.com/watch?v=XPoVknW-sig",    
  ISBN: "9781524779122"
}
,{  id: "book2",
title: "The Alchemist",
author: "Paulo Coelho",
price: 200,
genre: "Fiction",
publication:"Harper",
Language: "English",
Description:"Santiago, an Andalusian shepherd boy, looks to travel the world in the quest to find a worldly treasure, unlike any others. Santiago’s quest takes him to the magical desert of Egypt, where he meets the alchemist. Is the alchemist what Santiago was looking for, or is he there to stop Santiago from fulfilling his quest? Well, you’ll have to read The Alchemist to find out.",
imagePath: "assets/images/book2.jpg",
bookPath: "assets/pdf/book2",
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
bookPath: "assets/pdf/book3.jpg",
booktrailer: "",    
ISBN: "9788173711466"
},
{  id: "book4",
title: "Becoming",
author: "Michelle Obama",
price: 260,
genre: "Autobiography",
publication:"Viking",
Language: "English",
Description:"This is a rich, entertaining and candid memoir. And overall she's a fun person to sit alongside as she tells you the story of her life, warts and all. . . it is as beautifully written as any piece of fiction, with a similar warm languid tone to Ann Patchett's novel Commonwealth (Viv Groskop i, Five Stars)" ,
imagePath: "assets/images/book4.jpg",
bookPath: "assets/pdf/book4.jpg",
booktrailer: "https://www.youtube.com/watch?v=MqnF1I4oDVc",    
ISBN: "9780241334140"
}];



}
