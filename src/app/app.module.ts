import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewCooperateAdmissionComponent } from './dashboard/register/cooperate-admission/new-cooperate-admission/new-cooperate-admission.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MatDialogModule } from '@angular/material/dialog';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    NewCooperateAdmissionComponent,
    CustomCheckboxComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatDialogModule,
    BreadcrumbModule,
  ],
  providers: [provideNgxMask(), BreadcrumbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
