import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spouse',
  templateUrl: './spouse.component.html',
  styleUrls: ['./spouse.component.scss']
})
export class SpouseComponent implements OnInit {

  constructor() { }
  buttons = [
    { label: 'Employee List' },
    { label: 'Add Employee' }
  ];
  ngOnInit(): void {
  }

}
