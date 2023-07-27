
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Contact } from 'app/models/contact.model';
import { ContactService } from 'app/service/contact.service';
import { EmployeeIdService } from 'app/service/employee-id.service';
import { PidService } from 'app/service/pid.service';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  addContactRequest:Contact={
    pId:0,
    id:  "3fa85f64-5717-4562-b3fc-2c963f66afa6",
   createdBy: '', 
     createdDate: "2023-07-20T13:56:00.062Z", 
     updatedDate: "2023-07-20T13:56:00.062Z", 
     updatedBy: '', 
     empId: "3fa85d64-5717-4562-b3fc-2c963f66afa6",
    region: '', 
     town: '', 
     phoneNumber: '', 
     email: '',
     postCode: 0,
     houseNo:'',
     Kebele:'',
     woreda:'',
     subCity:'',
     status:0,
    

}
constructor(
  private formBuilder: FormBuilder,
  private pIdservice: PidService, 
  private contactservice: ContactService,
  private employeeIdService: EmployeeIdService,
  private router:Router){}
ngOnInit():void {
}
contactForm: FormGroup = this.formBuilder.group({
  phoneNumber: ['', Validators.required],
});

buttons = [
  { label: ' Add Employee ', route: '/employee-registration' },
  { label: '  List Employee ', route: '/employee-list' }
];
addContact(){
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }
  this.addContactRequest.pId = this.pIdservice.pId;
  this.addContactRequest.empId = this.employeeIdService.employeeId;
this.contactservice.addContact(this.addContactRequest)
.subscribe({
next:(jobdescription)=>{
this.router.navigate([jobdescription])
},
 error(response){
  console.log(response)
}
})}}

