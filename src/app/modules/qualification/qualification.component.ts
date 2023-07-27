import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Division } from 'app/models/division.model';
import { EducationLevel } from 'app/models/job-description.model';
import { Education, WorkExperience,} from 'app/models/work-experience.model';
import { DivisionService } from 'app/service/division.service';
import { EducationService } from 'app/service/education.service';
import { EducationLevelService } from 'app/service/educationlevel.service';
import { EmployeeIdService } from 'app/service/employee-id.service';
import { WorkExperienceService } from 'app/service/work-experience.service';


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {

  educationlevels:EducationLevel[]= [];
  selectedEducationLevel: string='';
  
  educationSaved: boolean = false;
  workExperienceSaved: boolean = false;

  divisions: Division[] = [];
  selectedDivision: string = '';
  educations: Education[] = [];
  workExperiences: WorkExperience[] = [];

  buttons = [
    { label: ' Add Employee ', route: "/employee-registration" },
    { label: '  List Employee ', route: "/employee-list" },
  ];

  addWorkExperienceRequest: WorkExperience = {
    pId: 0,
    id: undefined,
    name: "",
    description: "",
    createdBy: "",
    createdDate: "2023-07-26T06:13:52.512Z",
    updatedDate: "2023-07-26T06:13:52.512Z",
    updatedBy: "",
    status: 0,
    empId: "A3C5647E-0A7B-4CB2-A51C-064B23295DD9",
    companyName: "",
    postionHeld: "",
    from: "",
    to: "",
    salary: 0,
    reasonTermination: "",
  };

  addEducationRequest: Education = {
    pId: 0,
    id:undefined,
    createdBy: "",
    createdDate: "2023-07-26T06:13:52.512Z",
    updatedDate: "2023-07-26T06:13:52.512Z",
    updatedBy: "",
    status: 0,
    empId: "A3C5647E-0A7B-4CB2-A51C-064B23295DD9",
    from: '',
    to: "",
    nameOfInstitute: '',
    fieldOfStudy: '',
    eductionName: '',
  };

  constructor(
    private divisionservice: DivisionService,
    private workExperienceService: WorkExperienceService,
    private educationservice: EducationService,
    private router: Router,
    private educationlevelservice:EducationLevelService,
    private employeeIdService: EmployeeIdService,
  ) { }

  ngOnInit(): void {
    this.divisionservice.getAllDivisions().subscribe({
      next: (divisions) => {
        this.divisions = divisions;
      },
      error(response) {
        console.log(response)
      }
    });
    this.educationlevelservice.getAllEducationLevels()
.subscribe({
  next: (educationlevels) => {
    this.educationlevels=educationlevels;
  },
  error(response){
    console.log(response)
  }
});
  }

  addWorkExperience() {
    this.addWorkExperienceRequest.empId = this.employeeIdService.employeeId;
    this.workExperienceService.addWorkExperience(this.addWorkExperienceRequest).subscribe({
      next: (employee) => {
        this.workExperienceSaved = true;
        setTimeout(() => {
          this.workExperienceSaved = false;
        }, 2000);
        // Add the current work experience to the array
        this.workExperiences.push({ ...this.addWorkExperienceRequest });
        // Reset the form fields
        this.addWorkExperienceRequest = {
          pId: 0,
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          name: "",
          description: "",
          createdBy: "",
          createdDate: "",
          updatedDate: "",
          updatedBy: "",
          status: 0,
          empId: "",
          companyName: "",
          postionHeld: "",
          from: "",
          to: "",
          salary: 0,
          reasonTermination: "",
        };
      },
      error(response) {
        console.log(response)
      }
    });
  }

  addEducation() {
    this.addEducationRequest.empId = this.employeeIdService.employeeId;
    this.addEducationRequest.eductionName = this.selectedEducationLevel;
    this.educationservice.addEducation(this.addEducationRequest).subscribe({
      next: (employee) => {
        this.educationSaved = true;
        setTimeout(() => {
          this.educationSaved = false;
        }, 2000);
        // Add the current education to the array
        this.educations.push({ ...this.addEducationRequest });
        // Reset the form fields
        this.addEducationRequest = {
          pId: 0,
          id: undefined,
          createdBy: "",
          createdDate: "2023-07-25T14:10:21.467Z",
          updatedDate: "2023-07-25T14:10:21.467Z",
          updatedBy: "",
          status: 0,
          empId: "EED0DACB-73D6-4CC9-9526-269A2921106E",
          from: '',
          to: "",
          nameOfInstitute: '',
          fieldOfStudy: '',
          eductionName: '',
        };
      },
      error(response) {
        console.log(response)
      }
    });
  }

}
