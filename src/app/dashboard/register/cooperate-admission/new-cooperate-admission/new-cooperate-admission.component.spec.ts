import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCooperateAdmissionComponent } from './new-cooperate-admission.component';

describe('NewCooperateAdmissionComponent', () => {
  let component: NewCooperateAdmissionComponent;
  let fixture: ComponentFixture<NewCooperateAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCooperateAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCooperateAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
