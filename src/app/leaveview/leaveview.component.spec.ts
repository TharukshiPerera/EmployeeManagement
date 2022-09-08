import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveviewComponent } from './leaveview.component';

describe('LeaveviewComponent', () => {
  let component: LeaveviewComponent;
  let fixture: ComponentFixture<LeaveviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
