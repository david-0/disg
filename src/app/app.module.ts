import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatRadioModule,
  MatToolbarModule,
  MatExpansionModule,
  MatChipsModule,
  MatInputModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouteModule} from './app-route.module';

import {AppComponent} from './app.component';
import {CubeComponent} from './cube/cube.component';
import {CubesComponent} from './cubes/cubes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataprotectionComponent} from './dataprotection/dataprotection.component';
import {EvaluationComponent} from './evaluation/evaluation.component';
import {DetailsDComponent} from './extended/details-d/details-d.component';
import {DetailsGComponent} from './extended/details-g/details-g.component';
import {DetailsIComponent} from './extended/details-i/details-i.component';
import {DetailsSComponent} from './extended/details-s/details-s.component';
import {ManualComponent} from './manual/manual.component';
import {ModuleComponent} from './module/module.component';
import {QuestionComponent} from './question/question.component';
import {SelfAssessmentComponent} from './self-assessment/self-assessment.component';
import {AnswerService} from './service/answer.service';
import {DetailsService} from './service/details.service';
import {EvaluationService} from './service/evaluation.service';
import {ModuleService} from './service/module.service';
import {QuestionService} from './service/question.service';

@NgModule({
  declarations: [
    AppComponent,
    EvaluationComponent,
    QuestionComponent,
    ManualComponent,
    DataprotectionComponent,
    DashboardComponent,
    CubeComponent,
    CubesComponent,
    DetailsDComponent,
    DetailsIComponent,
    DetailsSComponent,
    DetailsGComponent,
    ModuleComponent,
    SelfAssessmentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRouteModule,
    MatChipsModule,
    MatInputModule,
  ],
  providers: [
    AnswerService,
    QuestionService,
    EvaluationService,
    DetailsService,
    ModuleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
