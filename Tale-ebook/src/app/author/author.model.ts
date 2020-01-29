import { Book } from '../book/book.model';

export interface Author {
    author_id: number;
    authorName: string;
    email:string;
    password:string;
    BookList:Book[];    
}