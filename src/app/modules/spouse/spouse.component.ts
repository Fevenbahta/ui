import { Component, OnInit } from '@angular/core';
import { Spouse } from 'app/models/spouse.model';
import { SpouseService } from 'app/service/spouse.service';

@Component({
  selector: 'app-spouse',
  templateUrl: './spouse.component.html',
  styleUrls: ['./spouse.component.scss']
})
export class SpouseComponent implements OnInit {

  spouseSaved: boolean = false;
  spouses: Spouse[] = []; 

  addSpouseRequest: Spouse = {
    pId: 0,
    id: undefined,
    name: "",
    createdBy: "",
    createdDate: "2023-07-26T06:13:52.512Z",
    updatedDate: "2023-07-26T06:13:52.512Z",
    updatedBy: "",
    status: 0,
    empId: "A3C5647E-0A7B-4CB2-A51C-064B23295DD9",
  dateOfBirth:"2023-07-26T06:33:36.714Z",
  relationship: '',

  };


  constructor(private spouseservice:SpouseService) { }
  buttons = [
    { label: 'Employee List' },
    { label: 'Add Employee' }
  ];
  ngOnInit(): void {
  }
  addSpouse() {
    this.spouseservice.addSpouse(this.addSpouseRequest).subscribe({
      next: (employee) => {
        this.spouseSaved = true;
        setTimeout(() => {
          this.spouseSaved = false;
        }, 2000);
        this.spouses.push({ ...this.addSpouseRequest });

        this.addSpouseRequest = {
          pId: 0,
          id: undefined,
          name: "",
          createdBy: "",
          createdDate: "2023-07-26T06:13:52.512Z",
          updatedDate: "2023-07-26T06:13:52.512Z",
          updatedBy: "",
          status: 0,
          empId: "A3C5647E-0A7B-4CB2-A51C-064B23295DD9",
         dateOfBirth:"2023-07-26T06:33:36.714Z",
        relationship: '',
      
        };
      },
      error(response) {
        console.log(response)
      }
    });
  }
}
