import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCooperateAdmissionInitialComponent } from './new-cooperate-admission-initial.component';

describe('NewCooperateAdmissionInitialComponent', () => {
  let component: NewCooperateAdmissionInitialComponent;
  let fixture: ComponentFixture<NewCooperateAdmissionInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCooperateAdmissionInitialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCooperateAdmissionInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
