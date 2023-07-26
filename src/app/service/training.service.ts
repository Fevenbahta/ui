import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from 'app/models/training.model';




@Injectable({
  providedIn: 'root'
})
export class TrainingService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllTraining(): Observable<Training[]> {
    return this.http.get<Training[]>(this.apiUrl + 'api/Training');
  }
  getTraining(id:number): Observable<Training> {
    return this.http.get<Training>(this.apiUrl + 'api/Training/'+id);
  }

  addTraining(addTrainingRequest:Training): Observable<Training> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Training>(this.apiUrl + 'api/Training', addTrainingRequest,httpOptions);
  }

  updateTraining(trainingDetails:Training, Id:number): Observable<Training> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Training>(this.apiUrl + 'api/Training/'+Id, trainingDetails,httpOptions);
  }

  deleteTraining(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Training/' + Id, httpOptions);
  }

  

}
