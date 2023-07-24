import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.scss']
})
export class JobdescriptionComponent implements OnInit {

  constructor() { }
  buttons = [
    { label: 'Employee List' },
    { label: 'Add Employee' }
  ];
  ngOnInit(): void {
  }

}
