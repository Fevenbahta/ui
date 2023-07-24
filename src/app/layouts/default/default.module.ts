import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



import { EmployeeRegistrationComponent } from 'app/modules/employee-registration/employee-registration.component';

import { SharedModule } from 'app/shared/shared.module';
import { DefaultComponent } from './default.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from 'app/modules/dashboard/dashboard.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MinNavComponent } from 'app/modules/nav/min-nav/min-nav.component';
import { EmployeeService } from 'app/service/employee.service';
import { ContactComponent } from 'app/modules/contact/contact.component';


@NgModule({
  declarations: [
    DefaultComponent,
     DashboardComponent,
    EmployeeRegistrationComponent,
   ContactComponent,
    MinNavComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
 MatPseudoCheckboxModule,
 MatNativeDateModule,
 MatDatepickerModule,
 MatSlideToggleModule,
 MatMenuModule,
 MatSidenavModule,
 MatDividerModule,
 FlexLayoutModule,
 MatCardModule,
 MatPaginatorModule,
 MatTableModule,
 SharedModule
  ],

providers: [

  EmployeeService
],
})
export class DefaultModule { }
