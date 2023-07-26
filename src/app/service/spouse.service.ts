import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spouse } from 'app/models/spouse.model';




@Injectable({
  providedIn: 'root'
})
export class SpouseService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllSpouse(): Observable<Spouse[]> {
    return this.http.get<Spouse[]>(this.apiUrl + 'api/Spouse');
  }
  getSpouse(id:number): Observable<Spouse> {
    return this.http.get<Spouse>(this.apiUrl + 'api/Spouse/'+id);
  }

  addSpouse(addSpouseRequest:Spouse): Observable<Spouse> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Spouse>(this.apiUrl + 'api/Spouse', addSpouseRequest,httpOptions);
  }

  updateSpouse(spouseDetails:Spouse, Id:number): Observable<Spouse> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Spouse>(this.apiUrl + 'api/Spouse/'+Id, spouseDetails,httpOptions);
  }

  deleteSpouse(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Spouse/' + Id, httpOptions);
  }

  

}
