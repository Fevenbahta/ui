import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergencycontact',
  templateUrl: './emergencycontact.component.html',
  styleUrls: ['./emergencycontact.component.scss']
})
export class EmergencycontactComponent implements OnInit {

  constructor() { }
  buttons = [
    { label: 'Employee List' },
    { label: 'Add Employee' }
  ];
  ngOnInit(): void {
  }

}
