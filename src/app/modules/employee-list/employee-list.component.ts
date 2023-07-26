import { Component } from '@angular/core';
import { Employee } from 'app/models/employee.model';
import { EmployeeService } from 'app/service/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees:Employee[]= [];
    buttons = [   
    { label: 'Add Employee', route:"/employee-registration" },
   { label: 'Employee List',route:"/employee-list" }
    ]
constructor(private employeeservice: EmployeeService){}
ngOnInit(): void{
this.employeeservice.getAllEmployees()
.subscribe({
  next: (employees) => {
    this.employees=employees;
  },
  error(response){
    console.log(response)
  }
});
}}
