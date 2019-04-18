import { Book } from './../book';
import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];
  constructor(private bookService: BookserviceService) {
    //this.books = this.bookService.getBooks();
    this.bookService.getBooks().subscribe(book => this.books = book)
  }
  ngOnInit() {
  }
}
