import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatButtonToggleModule, MatButtonModule, MatRadioModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {EvaluationComponent} from './evaluation/evaluation.component';
import {QuestionComponent} from './question/question.component';
import {AnswerService} from './service/answer.service';
import {QuestionService} from './service/question.service';

@NgModule({
  declarations: [
    AppComponent,
    EvaluationComponent,
    QuestionComponent,
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
  ],
  providers: [
    AnswerService,
    QuestionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
