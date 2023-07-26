// import { Component } from '@angular/core';
// import { Route, Router } from '@angular/router';


// import { Employee } from 'app/models/employee.model';
// import { EmployeeIdService } from 'app/service/employee-id.service';
// import { EmployeeService } from 'app/service/employee.service';
// import { PidService } from 'app/service/pid.service';

// @Component({
//   selector: 'app-employee-registration',
//   templateUrl: './employee-registration.component.html',
//   styleUrls: ['./employee-registration.component.css']
// })
// export class EmployeeRegistrationComponent {
//   addEmployeeRequest:Employee={
//     pId: undefined,
//     createdBy: "",
//     createdDate: "",
//     updatedDate:"",
//     updatedBy: "",
//     empId:undefined,
//     ecxId: "",
//     adId: "",
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     joinDate: "",
//     sex: "",
//     dateOfBityh: "",
//     placeOfBith: "",
//     martialStatus: "",
//     salutation: "",
//     nationality: "",
//     pensionNo: "",
//     imageData: "",
//     crime: true,
//     crimeDescription: "",
//     firstSupervisor: "",
//     secondSupervisor: "",
//     status:0,
// }
// buttons = [
//   { label: ' Add Employee ' , route:"/employee-registration" },
//        { label: '  List Employee ', route:"/employee-list" }
// ];

// constructor(private pIdservice: PidService, private employeeservice: EmployeeService, private employeeIdService: EmployeeIdService, private router:Router){}
// ngOnInit():void {
// } 

// addEmployee(){
//   // this.addEmployeeRequest.empId = uuidv4();
//   // this.employeeIdService.employeeId = this.addEmployeeRequest.empId;
// //  this.addEmployeeRequest.pId = this.pIdservice.pId;
// this.employeeservice.addEmployee(this.addEmployeeRequest)
// .subscribe({
// next:(contact)=>{
//   // this.employeeIdService.employeeId = employee.empId;

// this.router.navigate(["/employee-registration/contact",]);

// },
//  error(response){
//   console.log(response)
// }
// })

// }}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';


import { Employee } from 'app/models/employee.model';
import { EmployeeService } from 'app/service/employee.service';
import { PidService } from 'app/service/pid.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  employeeForm: FormGroup;

  buttons = [
    { label: ' Add Employee ', route: '/employee-registration' },
    { label: '  List Employee ', route: '/employee-list' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private pIdservice: PidService,
    private employeeservice: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      pId: [0], // You can add any specific validation rule here, like Validators.required
      createdBy: ['string', Validators.required],
      createdDate: [ "2023-07-25T09:28:33.440Z", Validators.required],
      updatedDate: [ "2023-07-25T09:28:33.440Z", Validators.required],
      updatedBy: ['string', Validators.required],
      empId: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"], // You can add any specific validation rule here, like Validators.required
      ecxId: ['ecx/pi', Validators.required],
      adId: ['ad/pi', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      joinDate: ['', Validators.required],
      sex: ['', Validators.required],
      dateOfBityh: ['', Validators.required],
      placeOfBith: ['', Validators.required],
      martialStatus: ['', Validators.required],
      salutation: ['', Validators.required],
      nationality: ['', Validators.required],
      pensionNo: ['', Validators.required],
      imageData: [''],
      crime: [true],
      crimeDescription: [''],
      firstSupervisor: ['', Validators.required],
      secondSupervisor: ['', Validators.required],
      status: [0,]
    });
  }

  addEmployee(): void {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;
      // formData.empId = uuidv4();

      this.employeeservice.addEmployee(formData).subscribe({
        next: (contact) => {
          this.router.navigate(['/employee-registration/contact']);
        },
        error: (response) => {
          console.log(response);
        }
      });
console.log(this.employeeForm.value)
    }
     else {
      this.validateAllFormFields(this.employeeForm);
      console.log("error")
    }
  }
validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach((field) => {
    const control = formGroup.get(field);
    if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    } else {
      control.markAsTouched({ onlySelf: true });
    }
  });}}
