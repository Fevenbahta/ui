import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepositeAuthentication } from 'app/models/deposite-authentication.model';




@Injectable({
  providedIn: 'root'
})
export class DepositeAuthenticationService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllDepositeAuthentication(): Observable<DepositeAuthentication[]> {
    return this.http.get<DepositeAuthentication[]>(this.apiUrl + 'api/DepositeAuthentication');
  }
  getDepositeAuthentication(id:number): Observable<DepositeAuthentication> {
    return this.http.get<DepositeAuthentication>(this.apiUrl + 'api/DepositeAuthentication/'+id);
  }

  addDepositeAuthentication(addDepositeAuthenticationRequest:DepositeAuthentication): Observable<DepositeAuthentication> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<DepositeAuthentication>(this.apiUrl + 'api/DepositeAuthentication', addDepositeAuthenticationRequest,httpOptions);
  }

  updateDepositeAuthentication(depositeauthenticationDetails:DepositeAuthentication, Id:number): Observable<DepositeAuthentication> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<DepositeAuthentication>(this.apiUrl + 'api/DepositeAuthentication/'+Id, depositeauthenticationDetails,httpOptions);
  }

  deleteDepositeAuthentication(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/DepositeAuthentication/' + Id, httpOptions);
  }

  

}
