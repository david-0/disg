import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EvaluationComponent} from './evaluation/evaluation.component';
import {SelfAssessmentComponent} from './self-assessment/self-assessment.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: '9382', component: SelfAssessmentComponent},
  {path: 'evaluation', component: EvaluationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRouteModule {
}
