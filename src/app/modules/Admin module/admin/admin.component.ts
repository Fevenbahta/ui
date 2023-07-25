import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  buttons = [
    { label: 'Organization' , route:"/admin/organization-info" },
         { label: 'Job', route:"/admin/department" },
    { label: 'Supervisor' , route:"/admin/supervisor"},
     { label: 'Qualificaton', route:"/admin/qualification" },

  ];
  // dropdownOptions = [
  //   [
  //     { label: 'Department', route: '/option1' },
  //     { label: 'Division', route: '/option2' },
  //     { label: 'grade', route: '/option3' },
  //     { label: 'level', route: '/option3' },

  //   ],
  //   [
  //     { label: 'Option 4', route: '/option4' },
  //     { label: 'Option 5', route: '/option5' },
  //     { label: 'Option 6', route: '/option6' }
  //   ]
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}
