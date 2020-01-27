import { Book } from '../book/book.model';

export interface Author {
    id: string;
    firstname: string;
    lastname: string
    email:string;
    password:string;
    books:Book[];    
}