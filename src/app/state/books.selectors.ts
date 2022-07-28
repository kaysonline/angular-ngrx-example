import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';
import { AppState } from './app.state';
import { BookListState } from './books.reducer';

export const selectBooks = (state: AppState) => state.books;
export const selectAllBooks = createSelector(
  selectBooks,
  (state: BookListState) => state.books
);

// export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  // selectBooks,
  selectAllBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);
