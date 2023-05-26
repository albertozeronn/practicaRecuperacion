import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from './interfaces/house';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private api: string = 'https://anapioficeandfire.com/api';

  constructor(
    private http: HttpClient
  ) { }

  public getAllHouses(page?: number, pageSize?: number): Observable<House[]> {
    let url = this.api + '/houses'
    if (page !== undefined || pageSize !== undefined) {
      if (page !== undefined) {
        url += `?page=${page}`
      }
      if (pageSize !== undefined) {
        url += `&pageSize=${pageSize}`
      }
    }
    return this.http.get<House[]>(url).pipe(
      map((data: House[]) => {
        return data;
      }),
      catchError(e => {
        console.error(e);
        return [];
      }),
    );
  }

  public getHouseById(id: string): Observable<House> {
    let url = this.api + '/houses';
    if (id !== undefined) {
      url += `/${id}`
    }
    return this.http.get<House>(url).pipe(
      map((data: House) => {
        return data;
      }),
      catchError(e => {
        console.error(e);
        return [];
      }),
    );
  }

  public getHouseByUrl(url: string): Observable<House> {
    return this.http.get<House>(url).pipe(
      map((data: House) => {
        return data;
      }),
      catchError(e => {
        console.error(e);
        return [];
      }),
    );
  }
}
