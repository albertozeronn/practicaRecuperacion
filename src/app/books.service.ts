import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './interfaces/book';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private api: string = 'https://anapioficeandfire.com/api';

  constructor(
    private http: HttpClient
  ) { }

  public getAllBooks(page?: number, pageSize?: number): Observable<Book[]> {
    let url = this.api + '/books'
    if (page !== undefined || pageSize !== undefined) {
      if (page !== undefined) {
        url += `?page=${page}`
      }
      if (pageSize !== undefined) {
        url += `&pageSize=${pageSize}`
      }
    }
    return this.http.get<Book[]>(url).pipe(
      map((data: Book[]) => {
        return data;
      }),
      catchError(e => {
        console.error(e);
        return [];
      }),
    );
  }

  public getBookById(id: string): Observable<Book> {
    let url = this.api + '/books';
    if (id !== undefined) {
      url += `/${id}`
    }
    return this.http.get<Book>(url).pipe(
      map((data: Book) => {
        return data;
      }),
      catchError(e => {
        console.error(e);
        return [];
      }),
    );
  }

  public getBookByUrl(url: string): Observable<Book> {
    return this.http.get<Book>(url).pipe(
      map((data: Book) => {
        return data;
      }),
      catchError(e => {
        console.error(e);
        return [];
      }),
    );
  }
}
