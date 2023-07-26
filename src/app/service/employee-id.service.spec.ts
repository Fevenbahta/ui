import { TestBed } from '@angular/core/testing';

import { EmployeeIdService } from './employee-id.service';

describe('EmployeeIdService', () => {
  let service: EmployeeIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
