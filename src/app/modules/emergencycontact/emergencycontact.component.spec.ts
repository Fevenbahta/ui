import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencycontactComponent } from './emergencycontact.component';

describe('EmergencycontactComponent', () => {
  let component: EmergencycontactComponent;
  let fixture: ComponentFixture<EmergencycontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencycontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencycontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
