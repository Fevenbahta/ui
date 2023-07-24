import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'app/models/employee.model';
import { EmployeeService } from 'app/service/employee.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
  addEmployeeRequest:Employee={
  
    createdBy: "string",
    createdDate: "2023-07-20T11:58:00.488Z",
    updatedDate: "2023-07-20T11:58:00.488Z",
    updatedBy: "string",
    empId: "3fa85f64-5717-4562-b3fc-2c963f66afa11",
    ecxId: "string",
    adId: "string",
    firstName: "",
    middleName: "",
    lastName: "",
    joinDate: "2023-07-20T11:58:00.488Z",
    sex: "",
    dateOfBityh: "2023-07-20T11:58:00.488Z",
    placeOfBith: "",
    martialStatus: "",
    salutation: "",
    nationality: "",
    pensionNo: "",
    imageData: "",
    crime: true,
    crimeDescription: "",
    firstSupervisor: "",
    secondSupervisor: ""
}
constructor(private employeeservice: EmployeeService,private router:Router){}
ngOnInit():void {
}
addEmployee(){
this.employeeservice.addEmployee(this.addEmployeeRequest)
.subscribe({
next:(employee)=>{
this.router.navigate([employee])
},
 error(response){
  console.log(response)
}
})

}}
