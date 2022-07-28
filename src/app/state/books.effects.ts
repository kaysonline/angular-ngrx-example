import { Injectable } from '@angular/core';

import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AppState } from './app.state';
import { GoogleBooksService } from '../book-list/books.service';
import {
  retrieveBooks,
  retrieveBookListSuccess,
  retrieveBookListFailure,
} from './books.actions';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private booksService: GoogleBooksService
  ) {}

  // Run this code when a loadTodos action is dispatched
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(retrieveBooks),
      switchMap(() =>
        // Call the getBooks method, convert it to an observable
        this.booksService.getBooks().pipe(
          // Take the returned value and return a new success action containing the books
          map((books) => retrieveBookListSuccess({ books: books })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(retrieveBookListFailure({ error })))
        )
      )
    )
  );
}
