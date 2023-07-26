import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmergencyContact } from 'app/models/emergency-contact.model';
import { EmergencyContactService } from 'app/service/emergency-contact.service';
import { EmployeeIdService } from 'app/service/employee-id.service';
import { PidService } from 'app/service/pid.service';

@Component({
  selector: 'app-emergencycontact',
  templateUrl: './emergencycontact.component.html',
  styleUrls: ['./emergencycontact.component.scss']
})
export class EmergencycontactComponent implements OnInit {
  emergencycontactSaved: boolean = false;
  emergencycontacts: EmergencyContact[] = []; 

  addEmergencyContactRequest:EmergencyContact={
    pId:0,
    id:  "3fa85f64-5717-4562-b3fc-2c963f66afa6",
   createdBy: '', 
     createdDate: "2023-07-20T13:56:00.062Z", 
     updatedDate: "2023-07-20T13:56:00.062Z", 
     updatedBy: '', 
     empId: "A78C1592-6804-4FB3-81EA-26BB1FF7F7A5",
    region: '', 
     town: '', 
     phoneNumber: '', 
     houseNo:'',
     subCity:'',
     status:0,
     name: "",
     kebele: "",
     relationship: "",

}
constructor(
  private formBuilder: FormBuilder,

  private emergencycontactservice: EmergencyContactService,
  private employeeIdService: EmployeeIdService,
  private router:Router){}
ngOnInit():void {
}
emergencycontactForm: FormGroup = this.formBuilder.group({
  phoneNumber: ['', Validators.required],
});

buttons = [
  { label: 'Employee List' },
  { label: 'Add Employee' }
];
addEmergencyContact() {
  
  this.emergencycontactservice.addEmergencyContact(this.addEmergencyContactRequest)
  .subscribe({
    next: (employee) => {
      this.emergencycontactSaved = true;
      setTimeout(() => {
        this.emergencycontactSaved = false;
      }, 2000);
      // Add the current work experience to the array
      this.emergencycontacts.push({ ...this.addEmergencyContactRequest });
      // Reset the form fields
      this.addEmergencyContactRequest = {
        pId:0,
        id:  "3fa85f64-5717-4562-b3fc-2c963f66afa6",
       createdBy: '', 
         createdDate: "2023-07-20T13:56:00.062Z", 
         updatedDate: "2023-07-20T13:56:00.062Z", 
         updatedBy: '', 
         empId: "A78C1592-6804-4FB3-81EA-26BB1FF7F7A5",
        region: '', 
         town: '', 
         phoneNumber: '', 
         houseNo:'',
         subCity:'',
         status:0,
         name: "",
         kebele: "",
         relationship: "",
      };
    },
 error(response){
  console.log(response)
}
})}

}
