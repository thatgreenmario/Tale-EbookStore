import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , NgForm} from '@angular/forms';
import { AuthorService } from '../author.service';
import { Author } from '../author.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'jquery';

@Component({
  selector: 'app-publish-book',
  templateUrl: './publish-book.component.html',
  styleUrls: ['./publish-book.component.css']
})
export class PublishBookComponent implements OnInit {

  title: string;
  author = {
    'author_id': sessionStorage.getItem("authorID"),
    'authorName': sessionStorage.getItem("authorName")
  };
  price: number;
  rating: string;
  genre: string;
  publication: string;
  language: string;
  description: string;
  imagepath: string;
  bookPath: string;
  booktrailer: string;
  isbn: string;
  sold: number;
  authorName: string;
  quantity: number;
  bookpdf: File;

  file:File;
  httpClient: any;

  fileToUpload

  constructor(private authorService: AuthorService, private http: HttpClient) { }

  ngOnInit() {

  }

  postMethod(files: FileList) {
    this.fileToUpload = files.item(0); 
    let formData = new FormData(); 
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 
    this.http.post("http://taleebookstore-env.hc4k2mbcsp.ap-south-1.elasticbeanstalk.com/upload", formData).subscribe((val) => {
    
    console.log(val);
    });
    return false; 
    }

  onAddBook(bookAddForm: NgForm) {

    var authorbookmap = {
      'authorId': sessionStorage.getItem('authorID'),
      'book': {
        'title': this.title,
        'author': this.author,
        'price': this.price,
        'rating': this.rating,
        'genre': this.genre,
        'publication': this.publication,
        'language': this.language,
        'description': this.description,
        'imagepath': this.imagepath,
        'bookPath': this.bookPath,
        'booktrailer': this.booktrailer,
        'isbn': this.isbn,
        'sold': this.sold,
        'authorName': this.authorName,
        'quantity': this.quantity,
      }
    }
    //var bookp: File = this.bookpdf;
    console.log(authorbookmap);
    this.authorService.addBookToList(authorbookmap).then(
      r => {
        console.log("book added successfully");
      }
    ).catch(e => {
      //alert('error fetching data');
    }
    );

    //this.onUploadFile();

  }

}
