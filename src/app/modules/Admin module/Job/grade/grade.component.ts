import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grade, Position } from 'app/models/job-description.model';
import { GradeService } from 'app/service/grade.service';
import { PositionService } from 'app/service/position.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
  positions:Position[]= [];
  selectedPosition: string='';
  grades:Grade[]=[];
  addGradeRequest: Grade={
  levelId: undefined,
  positionId: '',
  description: '',
createdBy: '',
createdDate: '2023-07-21T13:28:13.132Z',
updatedDate: '2023-07-21T13:28:13.132Z',
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

  constructor(private positionservice: PositionService , private gradeservice :GradeService ,private router:Router) { }

  ngOnInit(): void {
    this.positionservice.getAllPosition()
    .subscribe({
      next: (positions) => {
        this.positions=positions;
      },
      error(response){
        console.log(response)
      }
    });
    this.gradeservice.getAllGrade()
    .subscribe({
      next: (grades) => {
        this.grades=grades;
      },
      error(response){
        console.log(response)
      }
    });
  }
  addGrade(){
    this.addGradeRequest.positionId = this.selectedPosition;
    this.gradeservice.addGrade(this.addGradeRequest)
    .subscribe({
    next:(grade)=>{
    this.router.navigate(["employee-registration/grade"])
    },
     error(response){
      console.log(response)
    }
    })}
    getPositionName(positionId: string): string {
      const position = this.positions.find((g) => g.positionId === positionId);
      return position ? position.name : 'Unknown Grade';
    }
}
