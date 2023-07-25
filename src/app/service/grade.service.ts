import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grade, Step } from 'app/models/job-description.model';



@Injectable({
  providedIn: 'root'
})
export class GradeService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllGrade(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.apiUrl + 'api/Level');
  }
  getGrade(id:number): Observable<Grade> {
    return this.http.get<Grade>(this.apiUrl + 'api/Level/'+id);
  }

  addGrade(addGradeRequest:Grade): Observable<Grade> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Grade>(this.apiUrl + 'api/Level', addGradeRequest,httpOptions);
  }

  updateGrade(gradeDetails:Step, Id:number): Observable<Grade> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Grade>(this.apiUrl + 'api/Level/'+Id, gradeDetails,httpOptions);
  }

  deleteGrade(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Level/' + Id, httpOptions);
  }

  

}
