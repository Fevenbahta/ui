
import { ContactComponent } from 'app/modules/contact/contact.component';
import { DashboardComponent } from 'app/modules/dashboard/dashboard.component';

import { EmployeeRegistrationComponent } from 'app/modules/employee-registration/employee-registration.component';
import { DefaultComponent } from './default.component';
import { Routes } from '@angular/router';

export const DefaultRoutes: Routes = [
 
    {path: '',
  component: DefaultComponent,
children:
   [
{path:'',
component:DashboardComponent,
},
{path:'employee-registration',
component:EmployeeRegistrationComponent}
,
{path:'employee-registration/contact',
component: ContactComponent}
]
}
];
