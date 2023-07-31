import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grade, Step} from 'app/models/job-description.model';
import { GradeService } from 'app/service/grade.service';
import { StepService } from 'app/service/step.service';


@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  grades:Grade[]= [];
  selectedGrade: string='';
steps:Step[]=[];


  addStepRequest:Step={
    pId: 0,
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
  addstep(){
    this.addStepRequest.levelId = this.selectedGrade;
    this.stepservice.addStep(this.addStepRequest)
    .subscribe({
    next:(step)=>{
    this.router.navigate(["employee-registration/step"])
    },
     error(response){
      console.log(response)
    }
    })}
    getGradeName(levelId: string): string {
      const grade = this.grades.find((g) => g.levelId === levelId);
      return grade ? grade.description : 'Unknown Grade';
    }

    deleteStep(id:string){
      this.stepservice.deleteStep(id)
      .subscribe({
        next: (response) => {
          // Reload the grade list after successful deletion
          this.stepservice.getAllStep().subscribe((steps) => {
            this.steps = steps;
          });
        },
        error(response) {
          console.log(response);
        }
})}
}
