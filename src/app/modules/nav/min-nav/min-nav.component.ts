import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-nav',
  templateUrl: './min-nav.component.html',
  styleUrls: ['./min-nav.component.scss']
})
export class MinNavComponent implements OnInit {
  buttons = [
    { label: 'Employee List' },
    { label: 'Add Employee' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
