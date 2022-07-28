import { Book } from '../book-list/books.model';
import { BookListState } from './books.reducer';

export interface AppState {
  // books: ReadonlyArray<Book>;
  books: BookListState;
  collection: ReadonlyArray<string>;
}
