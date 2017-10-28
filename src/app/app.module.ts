import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatRadioModule,
  MatToolbarModule,
  MatExpansionModule
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

@NgModule({
  declarations: [
    AppComponent,
    EvaluationComponent,
    QuestionComponent,
    ManualComponent,
    DataprotectionComponent,
    DashboardComponent,
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
