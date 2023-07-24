import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  buttons = [   
    { label: 'Add Employee', route:"/user-profile/add-employee" },
   { label: 'Employee List',route:"/user-profile/employee-list" }

 ];
  ngOnInit(): void {
  }

}
