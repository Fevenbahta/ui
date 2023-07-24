import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinNavComponent } from './min-nav.component';

describe('MinNavComponent', () => {
  let component: MinNavComponent;
  let fixture: ComponentFixture<MinNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
