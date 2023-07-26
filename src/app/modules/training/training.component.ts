import { Component, OnInit } from '@angular/core';
import { Training } from 'app/models/training.model';
import { TrainingService } from 'app/service/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  trainingSaved: boolean = false;
  trainings: Training[] = [];

  addTrainingRequest: Training = {
    pId: 0,
    id: undefined,
    createdBy: "",
    createdDate: "2023-07-26T06:13:52.512Z",
    updatedDate: "2023-07-26T06:13:52.512Z",
    updatedBy: "",
    status: 0,
    empId: "A3C5647E-0A7B-4CB2-A51C-064B23295DD9",
    typeOfTraining: "",
    from: "",
    to: "",
  
  };
 

  buttons = [
    { label: 'Employee List' },
    { label: 'Add Employee' }
  ];
  constructor(private trainingService: TrainingService,) { }

  ngOnInit(): void {
  }
  addTraining() {
    this.trainingService.addTraining(this.addTrainingRequest)
    .subscribe({
      next: (employee) => {
        this.trainingSaved = true;
          setTimeout(() => {
        this.trainingSaved = false;
      }, 2000);
        // Add the current work experience to the array
        this.trainings.push({ ...this.addTrainingRequest });
        // Reset the form fields
        this.addTrainingRequest = {
          pId: 0,
          id: undefined,
          createdBy: "",
          createdDate: "2023-07-26T06:13:52.512Z",
          updatedDate: "2023-07-26T06:13:52.512Z",
          updatedBy: "",
          status: 0,
          empId: "A3C5647E-0A7B-4CB2-A51C-064B23295DD9",
          typeOfTraining: "",
          from: "",
          to: "",
        };
      },
      error(response) {
        console.log(response)
      }
    });
  }
}
