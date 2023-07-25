import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Division } from 'app/models/division.model';
import { Position } from 'app/models/job-description.model';

import { DivisionService } from 'app/service/division.service';

import { PositionService } from 'app/service/position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  divisions:Division[]= [];
  selectedDivision: string='';
  addPositionRequest:Position={
  
    positionId: "3fa85f64-5717-4562-b3fc-2c963f66afa9",
    divisionId: " ",
    name: '',
    description:'',
    createdBy: '',
    createdDate: "2023-07-21T13:28:13.132Z",
  updatedDate: "2023-07-21T13:28:13.132Z",
    updatedBy: '',
    status:0,
   
}

buttons = [
    { label: 'Position' , route:"/admin/position" },
         { label: 'Step', route:"/admin/step" },
    { label: 'EducationLevel' , route:"/admin/education-level"},
     { label: 'grade', route:"/admin/grade" },
     { label: 'Branch', route:"/admin/branch" },
     { label: 'Supervisor', route:"/admin/supervisor" },

  ];
 
constructor(private divisionservice: DivisionService,private positionservice: PositionService,private router:Router){}
ngOnInit():void {
  this.divisionservice.getAllDivisions()
.subscribe({
  next: (divisions) => {
    this.divisions=divisions;
  },
  error(response){
    console.log(response)
  }
});
}
addposition(){
  this.addPositionRequest.divisionId = this.selectedDivision;
this.positionservice.addPosition(this.addPositionRequest)
.subscribe({
next:(position)=>{
this.router.navigate([position])
},
 error(response){
  console.log(response)
}
})}}

