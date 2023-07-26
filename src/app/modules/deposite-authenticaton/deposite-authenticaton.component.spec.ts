import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositeAuthenticatonComponent } from './deposite-authenticaton.component';

describe('DepositeAuthenticatonComponent', () => {
  let component: DepositeAuthenticatonComponent;
  let fixture: ComponentFixture<DepositeAuthenticatonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositeAuthenticatonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositeAuthenticatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
