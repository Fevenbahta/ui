import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {

  constructor() { }
  buttons = [
    { label: 'Employee List' },
    { label: 'Add Employee' }
  ];
  ngOnInit(): void {
  }

}
