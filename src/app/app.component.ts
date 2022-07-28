import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectAllBooks, selectBookCollection, selectBooks } from './state/books.selectors';
import { retrieveBooks, addBook, removeBook } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // books$ = this.store.select(selectBooks);
  books$ = this.store.select(selectAllBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    //this.booksService
    //  .getBooks()
    //  .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));

    this.store.dispatch(retrieveBooks());
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
