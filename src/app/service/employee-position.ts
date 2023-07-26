import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'app/models/employee.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { EmployeePosition } from 'app/models/job-description.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeePositionService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllEmployeePosition(): Observable<EmployeePosition[]> {
    return this.http.get<EmployeePosition[]>(this.apiUrl + 'api/EmployeePosition');
  }
  getEmployeePosition(id:number): Observable<EmployeePosition> {
    return this.http.get<EmployeePosition>(this.apiUrl + 'api/EmployeePosition/'+id);
  }

  addEmployeePosition(addEmployeePositionRequest: EmployeePosition): Observable<EmployeePosition> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<EmployeePosition>(this.apiUrl + 'api/EmployeePosition', addEmployeePositionRequest, httpOptions)
      .pipe(
        catchError((error) => {
          console.error('Error occurred during addEmployeePosition:', error);
          // Handle the error here, you can throw a custom error or do any other error handling
          return throwError('An error occurred during addEmployeePosition. Please try again later.');
        })
      );
  }
  updateEmployeePosition(employeePositionDetails: EmployeePosition, Id:number): Observable<EmployeePosition> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<EmployeePosition>(this.apiUrl + 'api/EmployeePosition/'+Id, employeePositionDetails,httpOptions);
  }

  deleteEmployeePosition(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/EmployeePosition/' + Id, httpOptions);
  }

  

}
