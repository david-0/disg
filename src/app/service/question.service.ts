import {Injectable} from '@angular/core';
import {Question} from '../model/question';

@Injectable()
export class QuestionService {

  private _questions: Question[] = [];

  constructor() {
    this._questions.push(new Question(1, ['t1 sdfsd sdfsdf sdfkdfjasifasdfla asdfljdifjsad jasidf jsald fjlsadfjlsadjfidsajfjds fasdf'
      , 't2', 't3', 't4']));
    this._questions.push(new Question(2, ['t11', 't12', 't13', 't14']));
  }

  get questions(): Question[] {
    return this._questions;
  }
}
