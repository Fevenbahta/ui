import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from 'app/models/work-experience.model';




@Injectable({
  providedIn: 'root'
})
export class EducationService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl + 'api/Education');
  }
  getEducation(id:number): Observable<Education> {
    return this.http.get<Education>(this.apiUrl + 'api/Education/'+id);
  }

  addEducation(addEducationRequest:Education): Observable<Education> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Education>(this.apiUrl + 'api/Education', addEducationRequest,httpOptions);
  }

  updateEducation(educationDetails:Education, Id:number): Observable<Education> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Education>(this.apiUrl + 'api/Education/'+Id, educationDetails,httpOptions);
  }

  deleteEducation(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Education/' + Id, httpOptions);
  }

  

}
