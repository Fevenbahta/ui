import { TestBed } from '@angular/core/testing';

import { PidService } from './pid.service';

describe('PidService', () => {
  let service: PidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
