import { Book } from './book';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor() { }

  private book: Book[] = [{ "id": 1, "name": 'ra', "author": 'wf', "state": 'ad' },
  { "id": 2, "name": 'asf', "author": 'aad', "state": 'ad' },
  { "id": 3, "name": 'fs', "author": 'qe', "state": 'dds' },
  { "id": 4, "name": 'fgs', "author": 'hfr', "state": 'xc' },
  { "id": 5, "name": 'gd', "author": 'ng', "state": 'vc' }];

  getBooks(): Observable<Book[]> {
    return of(this.book);
  }
}
