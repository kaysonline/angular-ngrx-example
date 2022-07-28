import { createAction, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);

export const retrieveBooks = createAction('[Book List/API] Load Books');

export const retrieveBookListSuccess = createAction(
  '[Book List/API] Retrieve Books Success',
  // props<{ books: ReadonlyArray<Book> }>()
  props<{ books: Book[] }>()
);

export const retrieveBookListFailure = createAction(
  '[Book List/API] Retrieve Books Failure',
  props<{ error: string }>()
);
