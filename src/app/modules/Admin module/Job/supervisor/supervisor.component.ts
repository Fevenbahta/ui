import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, Supervisor } from 'app/models/employee.model';
import { EmployeeService } from 'app/service/employee.service';
import { SupervisorService } from 'app/service/supervisor.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent {
  employees:Employee[]= [];
  selectedEmployee: string='';
  
  addSupervisorRequest: Supervisor={
  id: '',
  empId: '',
createdBy: '',
createdDate: '',
updatedDate: '',
updatedBy: '',
status:0,
pId: 0,
supervisorLevel: '',

}
  buttons = [
    { label: 'Position' , route:"/admin/position" },
    { label: 'Step', route:"/admin/step" },
{ label: 'EducationLevel' , route:"/admin/education-level"},
{ label: 'Grade', route:"/admin/grade" },
{ label: 'Branch', route:"/admin/branch" },
     { label: 'Supervisor', route:"/admin/supervisor" },

  ];

  constructor(private employeeservice: EmployeeService , private supervisorservice :SupervisorService ,private router:Router) { }

  ngOnInit(): void {
    this.employeeservice.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees=employees;
      },
      error(response){
        console.log(response)
      }
    });
  }
  addSupervisor(){
    this.addSupervisorRequest.empId = this.selectedEmployee;
    this.supervisorservice.addSupervisor(this.addSupervisorRequest)
    .subscribe({
    next:(supervisor)=>{
    this.router.navigate([supervisor])
    },
     error(response){
      console.log(response)
    }
    })}
}

