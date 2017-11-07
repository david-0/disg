import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DetailsDComponent} from './extended/details-d/details-d.component';
import {DetailsGComponent} from './extended/details-g/details-g.component';
import {DetailsIComponent} from './extended/details-i/details-i.component';
import {DetailsSComponent} from './extended/details-s/details-s.component';
import {DetailsEvaluationComponent} from './extended/evaluation/details-evaluation.component';
import {SelfAssessmentComponent} from './self-assessment/self-assessment.component';
import {EvaluationComponent} from './evaluation/evaluation.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: '9382', component: SelfAssessmentComponent},
  {path: '9382/evaluation', component: EvaluationComponent},
  {path: '1720', component: DetailsDComponent},
  {path: '6288', component: DetailsIComponent},
  {path: '8471', component: DetailsSComponent},
  {path: '4343', component: DetailsGComponent},
  {path: '5119', component: DetailsEvaluationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRouteModule {
}
