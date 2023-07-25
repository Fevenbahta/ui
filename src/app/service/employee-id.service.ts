// employee-id.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeIdService {
  private _employeeId: string = '';

  get employeeId(): string {
    return this._employeeId;
  }

  set employeeId(id: string) {
    this._employeeId = id;
  }
}
