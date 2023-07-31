import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationLevel } from 'app/models/job-description.model';
import { EducationLevelService } from 'app/service/educationlevel.service';

@Component({
  selector: 'app-education-level',
  templateUrl: './education-level.component.html',
  styleUrls: ['./education-level.component.scss']
})
export class EducationLevelComponent implements OnInit {
  educationLevels:EducationLevel[]=[];
  addEducationLevelRequest: EducationLevel={
    educationName:'',
pid:'',
  id: '',
createdBy: '',
createdDate: '',
updatedDate: '',
updatedBy: '',
status:0,

  }
  buttons = [
    { label: 'Position' , route:"/admin/position" },
         { label: 'Step', route:"/admin/step" },
    { label: 'EducationLevel' , route:"/admin/education-level"},
     { label: 'Grade', route:"/admin/grade" },
     { label: 'Branch', route:"/admin/branch" },
     { label: 'Supervisor', route:"/admin/supervisor" },

  ];
  constructor(private educationLevelService :EducationLevelService,private router:Router ) { }

  ngOnInit(): void {
    this.educationLevelService.getAllEducationLevels()
    .subscribe({
      next: (educationlevels) => {
        this.educationLevels=educationlevels;
      },
      error(response){
        console.log(response)
      }
    });
  }
  addEducationLevel(){

    this.educationLevelService.addEducationLevel(this.addEducationLevelRequest)
    .subscribe({
    next:(educationLevel)=>{
    this.router.navigate([educationLevel])
    },
     error(response){
      console.log(response)
    }
    })}
    deleteEducationLevel(id:string){
      this.educationLevelService.deleteEducationLevel(id)
      .subscribe({
        next: (response) => {
          // Reload the grade list after successful deletion
          this.educationLevelService.getAllEducationLevels().subscribe((educationLevels) => {
            this.educationLevels = educationLevels;
          });
        },
        error(response) {
          console.log(response);
        }
  })}
}
