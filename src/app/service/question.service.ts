import {Injectable} from '@angular/core';
import {Question} from '../model/question';

@Injectable()
export class QuestionService {

  private _questions: Question[] = [];

  constructor() {
    this._questions.push(new Question(1, [
      'People look up to me',
      'I tend to be a kind person',
      'I accept life as it comes',
      'People say I have a strong personality']));
    this._questions.push(new Question(2, [
      'I find it difficult to relax',
      'I have a very wide circle of friends',
      'I am always ready to help others',
      'I like to behave correctly']));
  }

  get questions(): Question[] {
    return this._questions;
  }
}
