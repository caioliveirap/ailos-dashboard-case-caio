import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CooperatesInterface } from '../registered-cooperate.type';
import { NewCooperateAdmissionInitialComponent } from './Components/new-cooperate-admission-initial/new-cooperate-admission-initial.component';
@Component({
  selector: 'app-new-cooperate-admission',
  templateUrl: './new-cooperate-admission.component.html',
  styleUrls: ['./new-cooperate-admission.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewCooperateAdmissionComponent {
  @ViewChild(NewCooperateAdmissionInitialComponent) initialStep:
    | NewCooperateAdmissionInitialComponent
    | undefined;

  selectedCooperate: CooperatesInterface | undefined;
  isConsultationAvailable: boolean = true;
  isChecklistOpened: boolean = false;

  setCooperateFound(cooperate: CooperatesInterface): void {
    this.selectedCooperate = cooperate;
  }

  resetCooperate(): void {
    this.initialStep?.resetCooperate();
    this.selectedCooperate = undefined;
    this.isConsultationAvailable = true;
  }
}
