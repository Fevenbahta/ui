import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegistrationComponent } from './modules/employee-registration/employee-registration.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
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
{path:'contact',
component: ContactComponent}
]
}]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
