import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './pages/report/report.component';
import { SearchComponent } from './pages/search/search.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { ConsultEspecialComponent } from './pages/consult-especial/consult-especial.component';
import { ConsultWizardComponent } from './pages/consult-wizard/consult-wizard.component';
import { SpecialityComponent } from './pages/speciality/speciality.component';
import { MedicComponent } from './pages/medic/medic.component';
import { ExamComponent } from './pages/exam/exam.component';
import { PatientComponent } from './pages/patient/patient.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    SearchComponent,
    ConsultComponent,
    ConsultEspecialComponent,
    ConsultWizardComponent,
    SpecialityComponent,
    MedicComponent,
    ExamComponent,
    PatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
