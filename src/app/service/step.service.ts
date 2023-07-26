import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Step } from 'app/models/job-description.model';



@Injectable({
  providedIn: 'root'
})
export class StepService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllStep(): Observable<Step[]> {
    return this.http.get<Step[]>(this.apiUrl + 'api/Step');
  }
  getStep(id:number): Observable<Step> {
    return this.http.get<Step>(this.apiUrl + 'api/Step/'+id);
  }

  addStep(addStepRequest:Step): Observable<Step> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Step>(this.apiUrl + 'api/Step', addStepRequest,httpOptions);
  }

  updateStep(stepDetails:Step, Id:number): Observable<Step> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Step>(this.apiUrl + 'api/Step/'+Id, stepDetails,httpOptions);
  }

  deleteStep(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Step/' + Id, httpOptions);
  }

  

}
