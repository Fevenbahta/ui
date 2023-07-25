import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from 'app/models/job-description.model';
import { BranchService } from 'app/service/branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent  {
  addBranchRequest:Branch={
  
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    pid:0,
    name: "",
    city:  "",
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
     { label: 'Grade', route:"/admin/grade" },
     { label: 'Branch', route:"/admin/branch" },
     { label: 'Supervisor', route:"/admin/supervisor" },

  ];
  constructor(private branchservice: BranchService,private router:Router){}
  ngOnInit():void {}
  addBranch(){
   
  this.branchservice.addBranch(this.addBranchRequest)
  .subscribe({
  next:(branch)=>{
  this.router.navigate([branch])
  },
   error(response){
    console.log(response)
  }
  })}
}
