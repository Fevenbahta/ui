import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepositeAuthentication } from 'app/models/deposite-authentication.model';
import { DepositeAuthenticationService } from 'app/service/deposite-authentcation.service';
import { EmployeeIdService } from 'app/service/employee-id.service';

@Component({
  selector: 'app-deposite-authenticaton',
  templateUrl: './deposite-authenticaton.component.html',
  styleUrls: ['./deposite-authenticaton.component.scss']
})


  export class DepositeAuthenticationComponent implements OnInit {
    depositeauthenticationSaved: boolean = false;
    depositeauthentications: DepositeAuthentication[] = []; 
  
    addDepositeAuthenticationRequest:DepositeAuthentication={
      pId:0,
      id:  "3fa85f64-5717-4562-b3fc-2c963f66afa6",
     createdBy: '', 
       createdDate: "2023-07-20T13:56:00.062Z", 
       updatedDate: "2023-07-20T13:56:00.062Z", 
       updatedBy: '', 
       empId: "",
       status:0,
     bank: '',
     bankBranch: '',
     bankAccount:0,
     tinNumber: '',
  
  }
  constructor(
    private formBuilder: FormBuilder,
  
    private depositeauthenticationservice: DepositeAuthenticationService,
    private employeeIdService: EmployeeIdService,
    private router:Router){}
  ngOnInit():void {
  }
  depositeauthenticationForm: FormGroup = this.formBuilder.group({
    phoneNumber: ['', Validators.required],
  });
  
  buttons = [
    { label: ' Add Employee ', route: '/employee-registration' },
    { label: '  List Employee ', route: '/employee-list' }
  ];
  addDepositeAuthentication() {
    this.addDepositeAuthenticationRequest.empId = this.employeeIdService.employeeId;
    this.depositeauthenticationservice.addDepositeAuthentication(this.addDepositeAuthenticationRequest)
    .subscribe({
      next: (employee) => {
        this.depositeauthenticationSaved = true;
        setTimeout(() => {
          this.depositeauthenticationSaved = false;
        }, 2000);
        // Add the current work experience to the array
        this.depositeauthentications.push({ ...this.addDepositeAuthenticationRequest });
        // Reset the form fields
        this.addDepositeAuthenticationRequest = {
          pId:0,
          id:  "",
         createdBy: '', 
           createdDate: "2023-07-20T13:56:00.062Z", 
           updatedDate: "2023-07-20T13:56:00.062Z", 
           updatedBy: '', 
           empId: "A78C1592-6804-4FB3-81EA-26BB1FF7F7A5",
           status:0,
         bank: '',
         bankBranch: '',
         bankAccount:0,
         tinNumber: '',
        };
      },
   error(response){
    console.log(response)
  }
  })}}
  
  
  