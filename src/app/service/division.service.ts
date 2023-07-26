import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Division } from 'app/models/division.model';



@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllDivisions(): Observable<Division[]> {
    return this.http.get<Division[]>(this.apiUrl + 'api/Division');
  }
  getDivision(id:number): Observable<Division> {
    return this.http.get<Division>(this.apiUrl + 'api/Division/'+id);
  }

  addDivision(addDivisionRequest: Division): Observable<Division> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    // addDivisionRequest.id="0000000-0000-0000-0000-000000000000"
    return this.http.post<Division>(this.apiUrl + 'api/Division', addDivisionRequest, httpOptions);
  }

  updateDivision(divisionDetails: Division,Id:number): Observable<Division> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Division>(this.apiUrl + 'api/Division/'+Id, divisionDetails, httpOptions);
  }

  deleteDivision(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Division/' + Id, httpOptions);
  }

  

}
