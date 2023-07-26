import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmergencyContact } from 'app/models/emergency-contact.model';




@Injectable({
  providedIn: 'root'
})
export class EmergencyContactService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllEmergencyContact(): Observable<EmergencyContact[]> {
    return this.http.get<EmergencyContact[]>(this.apiUrl + 'api/EmergencyContact');
  }
  getEmergencyContact(id:number): Observable<EmergencyContact> {
    return this.http.get<EmergencyContact>(this.apiUrl + 'api/EmergencyContact/'+id);
  }

  addEmergencyContact(addEmergencyContactRequest:EmergencyContact): Observable<EmergencyContact> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<EmergencyContact>(this.apiUrl + 'api/EmergencyContact', addEmergencyContactRequest,httpOptions);
  }

  updateEmergencyContact(emergencycontactDetails:EmergencyContact, Id:number): Observable<EmergencyContact> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<EmergencyContact>(this.apiUrl + 'api/EmergencyContact/'+Id, emergencycontactDetails,httpOptions);
  }

  deleteEmergencyContact(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/EmergencyContact/' + Id, httpOptions);
  }

  

}
