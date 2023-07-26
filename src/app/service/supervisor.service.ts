import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supervisor } from 'app/models/employee.model';



@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllSupervisors(): Observable<Supervisor[]> {
    return this.http.get<Supervisor[]>(this.apiUrl + 'api/Supervisor');
  }
  getSupervisor(id:number): Observable<Supervisor> {
    return this.http.get<Supervisor>(this.apiUrl + 'api/Supervisor/'+id);
  }

  addSupervisor(addSupervisorRequest:Supervisor): Observable<Supervisor> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Supervisor>(this.apiUrl + 'api/Supervisor', addSupervisorRequest,httpOptions);
  }

  updateSupervisor(supervisorDetails:Supervisor, Id:number): Observable<Supervisor> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Supervisor>(this.apiUrl + 'api/Supervisor/'+Id, supervisorDetails,httpOptions);
  }

  deleteSupervisor(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Supervisor/' + Id, httpOptions);
  }

  

}
