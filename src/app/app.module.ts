import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatRadioModule,
  MatToolbarModule,
  MatExpansionModule, MatChipsModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouteModule} from './app-route.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataprotectionComponent} from './dataprotection/dataprotection.component';
import {EvaluationComponent} from './evaluation/evaluation.component';
import {ManualComponent} from './manual/manual.component';
import {QuestionComponent} from './question/question.component';
import {AnswerService} from './service/answer.service';
import {EvaluationService} from './service/evaluation.service';
import {QuestionService} from './service/question.service';
import {PointComponent} from './cube/cube.component';
import { PointsComponent } from './points/points.component';

@NgModule({
  declarations: [
    AppComponent,
    EvaluationComponent,
    QuestionComponent,
    ManualComponent,
    DataprotectionComponent,
    DashboardComponent,
    PointComponent,
    PointsComponent,
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
  ],
  providers: [
    AnswerService,
    QuestionService,
    EvaluationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
