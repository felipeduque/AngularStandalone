import { Injectable } from '@angular/core';
import { Tour } from '../domain/tour';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, pipe } from 'rxjs';
import { TourResponse } from '../domain/tourresponse';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  //private tours: Tour[] = [];
  private apiUrl: string = 'http://localhost:8080/api/otherusercase/path';
/*   constructor(private http: HttpClient) { }

  getTours(): Observable<TourResponse<Tour[]>> {
    return this.http.get(this.apiUrl)
    .pipe(
      map((data) => ({data} as TourResponse<Tour[]>)),
      catchError((error: any) => {
        console.error('Error fetching tours:', error);
        return of({ data: [], message: 'Error fetching tours', success: false });
      })
    );
  } */
}
