import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Position } from 'app/models/job-description.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllPosition(): Observable<Position[]> {
    return this.http.get<Position[]>(this.apiUrl + 'api/Position');
  }
  getPosition(id:number): Observable<Position> {
    return this.http.get<Position>(this.apiUrl + 'api/Position/'+id);
  }

  addPosition(addPositionRequest: Position): Observable<Position> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Position>(this.apiUrl + 'api/Position', addPositionRequest, httpOptions)
      .pipe(
        catchError((error) => {
          console.error('Error occurred during addPosition:', error);
          // Handle the error here, you can throw a custom error or do any other error handling
          return throwError('An error occurred during addPosition. Please try again later.');
        })
      );
  }
  updatePosition(positionDetails: Position, Id:number): Observable<Position> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Position>(this.apiUrl + 'api/Position/'+Id, positionDetails,httpOptions);
  }

  deletePosition(Id: string): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Position/' + Id, httpOptions);
  }

  

}
