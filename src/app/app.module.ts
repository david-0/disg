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
  MatInputModule,
  MatCheckboxModule
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
import {DetailsComponent} from './extended/details/details.component';
import {DetailsEvaluationComponent} from './extended/evaluation/details-evaluation.component';
import {DetailsEvaluationService} from './extended/service/details-evaluation.service';
import {ManualComponent} from './manual/manual.component';
import {ModuleComponent} from './module/module.component';
import {QuestionComponent} from './question/question.component';
import {SelfAssessmentComponent} from './self-assessment/self-assessment.component';
import {AnswerService} from './service/answer.service';
import {DetailsService} from './service/details.service';
import {EvaluationService} from './service/evaluation.service';
import {ModuleService} from './service/module.service';
import {QuestionService} from './service/question.service';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {VoteInputComponent} from './vote/vote-input/vote-input.component';
import {VoteOutputComponent} from './vote/vote-output/vote-output.component';
import {VoteService} from './vote/service/vote.service';

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
    DetailsComponent,
    ToolbarComponent,
    DetailsEvaluationComponent,
    VoteInputComponent,
    VoteOutputComponent,
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
    MatCheckboxModule,
  ],
  providers: [
    AnswerService,
    QuestionService,
    EvaluationService,
    DetailsService,
    ModuleService,
    DetailsEvaluationService,
    VoteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
