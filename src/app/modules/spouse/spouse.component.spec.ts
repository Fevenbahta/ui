import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpouseComponent } from './spouse.component';

describe('SpouseComponent', () => {
  let component: SpouseComponent;
  let fixture: ComponentFixture<SpouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
