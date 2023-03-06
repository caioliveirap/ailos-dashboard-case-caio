import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { registeredCooperates } from '../../../registered-cooperates';
import { CooperatesInterface } from '../../../registered-cooperate.type';
@Component({
  selector: 'new-cooperate-admission-1',
  templateUrl: './new-cooperate-admission-initial.component.html',
  styleUrls: ['./new-cooperate-admission-initial.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewCooperateAdmissionInitialComponent {
  @Output() foundCooperate = new EventEmitter<CooperatesInterface>();

  cpfConsultationValue: string = '';
  selectedCooperate: CooperatesInterface | undefined;
  isLoadingCooperate: boolean = false;
  isConsultationAvailable: boolean = true;
  invalidCPF: boolean = false;
  errorMessage: string = '';

  resetCooperate(): void {
    this.selectedCooperate = undefined;
    this.isConsultationAvailable = true;
  }

  validateCPF(cpf: string): boolean {
    // NOTE: This validation is limited because all the CPF's are fake.
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) {
      this.invalidCPF = true;
      this.errorMessage = 'Informe um CPF válido';
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
        this.foundCooperate.emit(selectedCooperate);
        this.isConsultationAvailable = false;
      } else {
        this.invalidCPF = true;
        this.errorMessage = 'CPF não encontrado';
      }
      this.isLoadingCooperate = false;
    }, 2000);
  }
}
