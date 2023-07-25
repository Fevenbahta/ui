import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grade, Position, Step } from 'app/models/job-description.model';
import { GradeService } from 'app/service/grade.service';
import { PositionService } from 'app/service/position.service';
import { StepService } from 'app/service/step.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  grades:Grade[]= [];
  selectedGrade: string='';



  addStepRequest:Step={
  
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa8',
    salary:0,
   salaryTypeId: '3fa85f64-5717-4562-b3fc-2c963f66afa8',
   levelId: '',
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
  constructor( private gradeservice: GradeService, private stepservice: StepService,private router:Router) { }

  ngOnInit(): void {
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
  addstep(){
    this.addStepRequest.levelId = this.selectedGrade;
    this.stepservice.addStep(this.addStepRequest)
    .subscribe({
    next:(step)=>{
    this.router.navigate([step])
    },
     error(response){
      console.log(response)
    }
    })}

}
