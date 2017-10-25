import {Component, OnInit} from '@angular/core';
import {Answer} from './model/answer';
import {Question} from './model/question';
import {AnswerService} from './service/answer.service';
import {QuestionService} from './service/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

