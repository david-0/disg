import {Component, OnInit} from '@angular/core';
import {Answer} from '../model/answer';
import {AnswerService} from '../service/answer.service';
import {QuestionService} from '../service/question.service';

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.scss']
})
export class SelfAssessmentComponent implements OnInit {

  constructor(public answerService: AnswerService, public questionService: QuestionService) {
  }

  ngOnInit() {
  }

  onAnswerChange(answer: Answer) {
    this.answerService.setValue(answer.questionId, answer);
  }
}
