import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch, Step } from 'app/models/job-description.model';



@Injectable({
  providedIn: 'root'
})
export class BranchService {
 
  readonly apiUrl = 'https://localhost:7008/';
  

  constructor(private http: HttpClient) { }

  getAllBranch(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.apiUrl + 'api/Branch');
  }
  getBranch(id:number): Observable<Branch> {
    return this.http.get<Branch>(this.apiUrl + 'api/Branch/'+id);
  }

  addBranch(addBranchRequest:Branch): Observable<Branch> {
    // addEmployeeRequest.id="0000000-0000-0000-0000-000000000000"
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Branch>(this.apiUrl + 'api/Branch', addBranchRequest,httpOptions);
  }

  updateBranch(branchDetails:Branch, Id:number): Observable<Branch> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Branch>(this.apiUrl + 'api/Branch/'+Id, branchDetails,httpOptions);
  }

  deleteBranch(Id: number): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.apiUrl + 'api/Branch/' + Id, httpOptions);
  }

  

}
