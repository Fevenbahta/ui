
import { ContactComponent } from 'app/modules/contact/contact.component';
import { DashboardComponent } from 'app/modules/dashboard/dashboard.component';

import { EmployeeRegistrationComponent } from 'app/modules/employee-registration/employee-registration.component';
import { DefaultComponent } from './default.component';
import { Routes } from '@angular/router';
import { PositionComponent } from 'app/modules/Admin module/Job/position/position.component';
import { StepComponent } from 'app/modules/Admin module/Job/step/step.component';
import { GradeComponent } from 'app/modules/Admin module/Job/grade/grade.component';
import { QualificationComponent } from 'app/modules/qualification/qualification.component';
import { SpouseComponent } from 'app/modules/spouse/spouse.component';
import { TrainingComponent } from 'app/modules/training/training.component';
import { EmergencycontactComponent } from 'app/modules/emergencycontact/emergencycontact.component';
import { DepositeAuthenticatonComponent } from 'app/modules/deposite-authenticaton/deposite-authenticaton.component';

export const DefaultRoutes: Routes = [
 
    {path: '',
  component: DefaultComponent,
children:
   [
{path:'dashboard',
component:DashboardComponent,
},
{path:'employee-registration',
component:EmployeeRegistrationComponent}
,
{path:'employee-registration/contact',
component: ContactComponent},

{path:'admin',
component: PositionComponent},
{path:'admin/position',
component: PositionComponent},

{path:'admin/step',
component: StepComponent},
{path:'admin/grade',
component: GradeComponent}
]
}
];
