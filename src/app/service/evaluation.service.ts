import {Injectable} from '@angular/core';
import {AnswerService} from './answer.service';
import {QuestionService} from './question.service';

@Injectable()
export class EvaluationService {

  constructor(private answerService: AnswerService, private questionService: QuestionService) {
  }

  public evaluate() {
    const result = [0, 0, 0, 0];
    const mapping = ['d', 'i', 's', 'g'];
    this.questionService.questions.forEach(q => {
      const a = this.answerService.getValue(q.id);
      for (let i = 0; i < a.priorities.length; i++) {
        const pos = mapping.indexOf(q.statements[i].key);
        result[pos] += a.priorities[i] + 1;
      }
    });
    return result;
  }
}
