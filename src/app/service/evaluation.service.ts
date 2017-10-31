import {Injectable} from '@angular/core';
import {AnswerService} from './answer.service';
import {QuestionService} from './question.service';

@Injectable()
export class EvaluationService {

  constructor(private answerService: AnswerService, private questionService: QuestionService) {
  }

  public completeAnsweredQuestions(): number {
    let numberOfCompleteAnswers = 0;
    this.questionService.questions.forEach(q => {
      const a = this.answerService.getValue(q.id);
      let complete = true;
      for (let i = 0; i < a.priorities.length; i++) {
        if (a.priorities[i] === 0) {
          complete = false;
        }
      }
      if (complete) {
        numberOfCompleteAnswers++;
      }
    });
    return numberOfCompleteAnswers;
  }

  public allQuestionsCompleted(): boolean {
    return this.completeAnsweredQuestions() === this.questionService.questions.length;
  }

  public partialAnsweredQuestions(): number {
    let numberOfPartialAnswers = 0;
    this.questionService.questions.forEach(q => {
      const a = this.answerService.getValue(q.id);
      let partial = false;
      for (let i = 0; i < a.priorities.length; i++) {
        if (a.priorities[i] === 0) {
          partial = true;
        }
      }
      if (partial) {
        numberOfPartialAnswers++;
      }
    });
    return numberOfPartialAnswers;
  }

  public evaluate() {
    const result = [0, 0, 0, 0];
    const mapping = ['d', 'i', 's', 'g'];
    this.questionService.questions.forEach(q => {
      const a = this.answerService.getValue(q.id);
      for (let i = 0; i < a.priorities.length; i++) {
        const pos = mapping.indexOf(q.statements[i].key);
        result[pos] += a.priorities[i];
      }
    });
    return result;
  }
}
