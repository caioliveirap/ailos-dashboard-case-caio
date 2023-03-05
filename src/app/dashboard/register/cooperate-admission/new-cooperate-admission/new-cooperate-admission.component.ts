import { Component } from '@angular/core';
import { registeredCooperates } from '../registered-cooperates';
import { CooperatesInterface } from '../registered-cooperate.type';

@Component({
  selector: 'app-new-cooperate-admission',
  templateUrl: './new-cooperate-admission.component.html',
  styleUrls: ['./new-cooperate-admission.component.scss'],
})
export class NewCooperateAdmissionComponent {
  cpfConsultationValue: string = '';
  selectedCooperate: CooperatesInterface | undefined;
  isLoadingCooperate: boolean = false;
  isConsultationAvailable: boolean = true;
  invalidCPF: boolean = false;

  validateCPF(cpf: string): boolean {
    // NOTE: This validation is limited because all the CPF's are fake.
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) {
      this.invalidCPF = true;
      return false;
    }

    this.invalidCPF = false;
    return true;
  }

  searchCooperateWithCPF(): void {
    // NOTE: This setTimeout is just to simulate the loading of the search.
    if (
      !this.isConsultationAvailable ||
      !this.validateCPF(this.cpfConsultationValue)
    ) {
      return;
    }
    this.isLoadingCooperate = true;

    setTimeout(() => {
      const selectedCooperate = registeredCooperates.find(
        (cooperate: CooperatesInterface) => {
          return cooperate.cooperateCPF === this.cpfConsultationValue;
        }
      );

      if (selectedCooperate) {
        this.selectedCooperate = selectedCooperate;
        this.isConsultationAvailable = false;
      }

      this.isLoadingCooperate = false;
    }, 2000);
  }
}
