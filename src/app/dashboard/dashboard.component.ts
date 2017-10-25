import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../service/question.service';
import {AnswerService} from '../service/answer.service';
import {Answer} from '../model/answer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public answerService: AnswerService, public questionService: QuestionService) {
  }

  ngOnInit() {
  }

  onAnswerChange(answer: Answer) {
    this.answerService.setValue(answer.questionId, answer);
  }

}
