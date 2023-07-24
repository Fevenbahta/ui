import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposite-authenticaton',
  templateUrl: './deposite-authenticaton.component.html',
  styleUrls: ['./deposite-authenticaton.component.scss']
})
export class DepositeAuthenticatonComponent implements OnInit {

  constructor() { }
  buttons = [
    { label: 'Employee List' },
    { label: 'Add Employee' }
  ];
  ngOnInit(): void {
  }

}
