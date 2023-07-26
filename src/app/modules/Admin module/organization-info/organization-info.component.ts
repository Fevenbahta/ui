import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.scss']
})
export class OrganizationInfoComponent implements OnInit {
  buttons = [
    { label: 'Organization' , route:"/admin/organization-info" },
    { label: 'Job', 
    dropdownOptions: [
      { label: 'Department', route: '/admin/department' },
      { label: 'Division', route: '/admin/division' },
      { label: 'Position', route: '/admin/position' }
    ] },
    { label: 'Supervisor' , route:"/admin/supervisor"},
     { label: 'Qualificaton', route:"/admin/qualification" },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
