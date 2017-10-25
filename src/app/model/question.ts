import {Statement} from './statement';

export class Question {
  constructor(public id: number,
              public statements: Statement[]) {
  }
}
