import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from 'app/models/contact.model';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
 
  readonly apiUrl = 'https://localhost:44300/';
  

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl + 'api/Adress');
  }
  getContact(id:number): Observable<Contact> {
    return this.http.get<Contact>(this.apiUrl + 'api/Adress/'+id);
  }

  addContact(addContactRequest:Contact): Observable<Contact> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Contact>(this.apiUrl + 'api/Adress', addContactRequest,httpOptions);
  }

  updateContact(contactDetails:Contact, Id:number): Observable<Contact> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Contact>(this.apiUrl + 'api/Adress/'+Id, contactDetails,httpOptions);
  }

  deleteContact(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Adress/' + Id, httpOptions);
  }

  

}
