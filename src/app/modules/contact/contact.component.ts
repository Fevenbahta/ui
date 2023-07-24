
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Contact } from 'app/models/contact.model';

import { ContactService } from 'app/service/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  addContactRequest:Contact={
   
    id: '',
    empId:'', 
   createdBy: '', 
     createdDate: '', 
     updatedDate: '', 
     updatedBy: '', 
    region: '', 
     town: '', 
     phoneNumber: '', 
     email: '',
     postNumber:'',
     houseNumber:'',
     Kebele:'',
     woreda:'',
     subcity:''


}
constructor(private contactservice: ContactService,private router:Router){}
ngOnInit():void {
}

buttons = [
  { label: 'Employee List' },
  { label: 'Add Employee' }
];
addContact(){
this.contactservice.addContact(this.addContactRequest)
.subscribe({
next:(contact)=>{
this.router.navigate(["contact"])
},
 error(response){
  console.log(response)
}
})}}

