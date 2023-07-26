import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkExperience } from 'app/models/work-experience.model';




@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllWorkExperience(): Observable<WorkExperience[]> {
    return this.http.get<WorkExperience[]>(this.apiUrl + 'api/WorkExperience');
  }
  getWorkExperience(id:number): Observable<WorkExperience> {
    return this.http.get<WorkExperience>(this.apiUrl + 'api/WorkExperience/'+id);
  }

  addWorkExperience(addWorkExperienceRequest:WorkExperience): Observable<WorkExperience> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<WorkExperience>(this.apiUrl + 'api/WorkExperience', addWorkExperienceRequest,httpOptions);
  }

  updateWorkExperience(workexperienceDetails:WorkExperience, Id:number): Observable<WorkExperience> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<WorkExperience>(this.apiUrl + 'api/WorkExperience/'+Id, workexperienceDetails,httpOptions);
  }

  deleteWorkExperience(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/WorkExperience/' + Id, httpOptions);
  }

  

}
