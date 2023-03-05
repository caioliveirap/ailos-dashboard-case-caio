import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCooperateAdmissionComponent } from './dashboard/register/cooperate-admission/new-cooperate-admission/new-cooperate-admission.component';

const routes: Routes = [
  {
    path: 'cadastro/admissao-cooperado/nova-admissao-cooperado',
    component: NewCooperateAdmissionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
