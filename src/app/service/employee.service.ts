import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'app/models/employee.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { EmployeeIdService } from './employee-id.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient, private employeeidservice:EmployeeIdService) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl + 'api/Employee');
  }
  getEmployee(id:number): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl + 'api/Employee/'+id);
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Employee>(this.apiUrl + 'api/Employee', addEmployeeRequest, httpOptions)
    .pipe(  
      map(response => {  
        // Assuming the server's response contains the empId as response.empId  
         
         this.employeeidservice.employeeId = response.toString();  
        return response;  
         
      }),)
  }
  updateEmployee(employeeDetails: Employee, Id:number): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Employee>(this.apiUrl + 'api/Employee/'+Id, employeeDetails,httpOptions);
  }

  deleteEmployee(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Employee/' + Id, httpOptions);
  }

  

}
