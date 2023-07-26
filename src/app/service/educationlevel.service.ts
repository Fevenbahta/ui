import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationLevel } from 'app/models/job-description.model';




@Injectable({
  providedIn: 'root'
})
export class EducationLevelService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllEducationLevels(): Observable<EducationLevel[]> {
    return this.http.get<EducationLevel[]>(this.apiUrl + 'api/EducationLevel');
  }
  getEducationLevel(id:number): Observable<EducationLevel> {
    return this.http.get<EducationLevel>(this.apiUrl + 'api/EducationLevel/'+id);
  }

  addEducationLevel(addEducationLevelRequest:EducationLevel): Observable<EducationLevel> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<EducationLevel>(this.apiUrl + 'api/EducationLevel', addEducationLevelRequest,httpOptions);
  }

  updateEducationLevel(educationlevelDetails:EducationLevel, Id:number): Observable<EducationLevel> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<EducationLevel>(this.apiUrl + 'api/EducationLevel/'+Id, educationlevelDetails,httpOptions);
  }

  deleteEducationLevel(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/EducationLevel/' + Id, httpOptions);
  }

  

}
