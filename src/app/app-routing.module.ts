import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import {LpNewAccountComponent} from './lp-new-account/lp-new-account.component';



const routes: Routes = [
  { path: 'patientprofile', component: PatientProfileComponent},
  { path: 'lp-new-account', component: LpNewAccountComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
