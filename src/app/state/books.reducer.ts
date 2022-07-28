import { createReducer, on } from '@ngrx/store';

import {
  retrieveBooks,
  retrievedBookList,
  retrieveBookListFailure,
} from './books.actions';
import { Book } from '../book-list/books.model';

export interface BookListState {
  books: Book[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

// export const initialState: ReadonlyArray<Book> = [];

export const initialState: BookListState = {
  books: [],
  error: null,
  status: 'pending',
};

export const booksReducer = createReducer(
  initialState,
  // on(retrievedBookList, (state, { books }) => books)
  // Trigger loading the books
  on(retrieveBooks, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded books
  on(retrievedBookList, (state, { books }) => ({
    ...state,
    books: books,
    error: null,
    status: 'success',
  })),
  // Handle book load failure
  on(retrieveBookListFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
