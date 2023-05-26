import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Character } from './interfaces/character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private api: string = 'https://anapioficeandfire.com/api';

  constructor(
    private http: HttpClient
  ) { }

  public getAllCharacters(page?: number, pageSize?: number): Observable<Character[]> {
    let url = this.api + '/characters'
    if (page !== undefined || pageSize !== undefined) {
      if (page !== undefined) {
        url += `?page=${page}`
      }
      if (pageSize !== undefined) {
        url += `&pageSize=${pageSize}`
      }
    }
    return this.http.get<Character[]>(url).pipe(
      map((data: Character[]) => {
        return data;
      }),
      catchError(e => {
        console.error(e);
        return [];
      }),
    );
  }

  public getCharacterById(id: string): Observable<Character> {
    let url = this.api + '/characters';
    if (id !== undefined) {
      url += `/${id}`
    }
    return this.http.get<Character>(url).pipe(
      map((data: Character) => {
        return data;
      }),
      catchError(e => {
        console.error(e);
        return [];
      }),
    );
  }

  public getCharacterByUrl(url: string): Observable<Character> {
    return this.http.get<Character>(url).pipe(
      map((data: Character) => {
        return data;
      }),
      catchError(e => {
        console.error(e);
        return [];
      }),
    );
  }
}
