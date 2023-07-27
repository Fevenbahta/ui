import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Division } from 'app/models/division.model';

import { Employee } from 'app/models/employee.model';
import { Branch, EducationLevel, EmployeePosition, Position, Step } from 'app/models/job-description.model';
import { DivisionService } from 'app/service/division.service';
import { EducationLevelService } from 'app/service/educationlevel.service';
import { EmployeeIdService } from 'app/service/employee-id.service';

import { EmployeePositionService } from 'app/service/employee-position';
import { PositionService } from 'app/service/position.service';
import { StepService } from 'app/service/step.service';

@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.scss']
})
export class JobdescriptionComponent implements OnInit {
  jobdescriptionSaved: boolean = false;
employeepositions:EmployeePosition[]=[]

  divisions:Division[]= [];
  selectedDivision: string='';


   positions:Position[]= [];
  selectedPosition: string='';
  branches:Branch[]= [];
  selectedBranch: string='';
 
  steps:Step[]= [];
  selectedStep: string='';
  
  buttons = [
    { label: ' Add Employee ' , route:"/employee-registration" },
         { label: '  List Employee ', route:"/employee-list" },
  
  ];
  addEmployeePositionRequest:EmployeePosition={
    pid:0,
    empId:"",
    id:  "",
  divisionId:'',
  stepId: '',
  branchId: 'string',
  position: '',
  status:0,
  startDate: '',
  endDate: '2023-07-21T08:09:41.138Z',
createdBy: '',
createdDate: '2023-07-21T08:09:41.138Z',
updatedDate: '2023-07-21T08:09:41.138Z',
updatedBy: '',

  }
  



constructor(
  private divisionservice: DivisionService,
  private stepservice: StepService,
  private employeepositionservice:EmployeePositionService,
  private positionservice:PositionService ,
  private employeeIdService:EmployeeIdService,

  private router:Router){}
ngOnInit(): void{
this.divisionservice.getAllDivisions()
.subscribe({
  next: (divisions) => {
    this.divisions=divisions;
  },
  error(response){
    console.log(response)
  }
});
this.positionservice.getAllPosition()
.subscribe({
  next: (positions) => {
    this.positions=positions;
  },
  error(response){
    console.log(response)
  }
});
this.stepservice.getAllStep()
.subscribe({
  next: (steps) => {
    this.steps=steps;
  },
  error(response){
    console.log(response)
  }
});

}

addEmployeePosition(){
  this.addEmployeePositionRequest.empId = this.employeeIdService.employeeId;
  this.addEmployeePositionRequest.divisionId = this.selectedDivision;
  this.addEmployeePositionRequest.position = this.selectedPosition;
  this.addEmployeePositionRequest.stepId = this.selectedStep;
  this.addEmployeePositionRequest.branchId = this.selectedBranch;
  this.employeepositionservice.addEmployeePosition(this.addEmployeePositionRequest)
  .subscribe({
  next:()=>{
    this.jobdescriptionSaved = true;
    setTimeout(() => {
      this.jobdescriptionSaved = false;
    }, 2000);
    // Add the
     this.employeepositions.push({ ...this.addEmployeePositionRequest });

    this.addEmployeePositionRequest={
      pid:0,
      empId:'',
      id:  "",
    divisionId:'',
    stepId: '',
    branchId: 'string',
    position: '',
    status:0,
    startDate: '',
    endDate: '2023-07-21T08:09:41.138Z',
  createdBy: '',
  createdDate: '2023-07-21T08:09:41.138Z',
  updatedDate: '2023-07-21T08:09:41.138Z',
  updatedBy: '',
  
    }
  },
   error(response){
    console.log(response)
  }

  })}

}
