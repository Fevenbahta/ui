import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

import { Employee } from 'app/models/employee.model';
import { EmployeeIdService } from 'app/service/employee-id.service';
import { EmployeeService } from 'app/service/employee.service';
import { PidService } from 'app/service/pid.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
  addEmployeeRequest:Employee={
    pId: undefined,
    createdBy: "",
    createdDate: null,
    updatedDate:null,
    updatedBy: "",
    empId:undefined,
    ecxId: "",
    adId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    joinDate: "",
    sex: "",
    dateOfBityh: "",
    placeOfBith: "",
    martialStatus: "",
    salutation: "",
    nationality: "",
    pensionNo: "",
    imageData: "",
    crime: true,
    crimeDescription: "",
    firstSupervisor: "",
    secondSupervisor: "",
    status:0,
}
buttons = [
  { label: ' Add Employee ' , route:"/employee-registration" },
       { label: '  List Employee ', route:"/employee-list" }
];

constructor(private pIdservice: PidService, private employeeservice: EmployeeService, private employeeIdService: EmployeeIdService, private router:Router){}
ngOnInit():void {
} 

addEmployee(){
  // this.addEmployeeRequest.empId = uuidv4();
  // this.employeeIdService.employeeId = this.addEmployeeRequest.empId;
//  this.addEmployeeRequest.pId = this.pIdservice.pId;
this.employeeservice.addEmployee(this.addEmployeeRequest)
.subscribe({
next:(contact)=>{
  // this.employeeIdService.employeeId = employee.empId;
// this.router.navigate([employee])
this.router.navigate(["/employee-registration/contact",]);

},
 error(response){
  console.log(response)
}
})

}}
