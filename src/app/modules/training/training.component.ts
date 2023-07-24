import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  buttons = [
    { label: 'Employee List' },
    { label: 'Add Employee' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
