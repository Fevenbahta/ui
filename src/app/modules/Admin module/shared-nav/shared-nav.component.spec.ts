import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNavComponent } from './shared-nav.component';

describe('SharedNavComponent', () => {
  let component: SharedNavComponent;
  let fixture: ComponentFixture<SharedNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
