import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewCooperateAdmissionComponent } from './dashboard/register/cooperate-admission/new-cooperate-admission/new-cooperate-admission.component';

const routes: Routes = [
  {
    path: 'cadastro',
    component: NewCooperateAdmissionComponent,
    data: {
      breadcrumb: 'Cadastro',
    },
    children: [
      {
        path: 'admissao-cooperado',
        component: NewCooperateAdmissionComponent,
        data: {
          breadcrumb: 'Admissão do Cooperado',
        },
        children: [
          {
            path: 'nova-admissao-cooperado',
            component: NewCooperateAdmissionComponent,
            data: {
              breadcrumb: 'Nova Admissão de Cooperado',
            },
          },
        ],
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
    data: {
      breadcrumb: '404 - Página não encontrada',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
