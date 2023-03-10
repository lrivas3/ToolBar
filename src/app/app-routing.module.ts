import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MedicComponent } from './pages/medic/medic.component';
import { PatientComponent } from './pages/patient/patient.component';
import { SearchComponent } from './pages/search/search.component';



const routes: Routes = [
  {path: 'pages/medic', component: MedicComponent},
  {path: 'pages/patient', component: PatientComponent},
  {path: 'pages/search', component: SearchComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
