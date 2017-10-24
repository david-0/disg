import {Injectable, OnInit} from '@angular/core';
import {Answer} from '../model/answer';

@Injectable()
export class AnswerService {
  private _answers = new Map<number, Answer>();
  private _storageName = 'default';

  constructor() {
    this.loadLocalStorage(this._storageName);
  }

  public get storageName() {
    return this.storageName;
  }

  public set storageName(name: string) {
    this.storageName = name;
  }

  setValue(position: number, answer: Answer) {
    this._answers.set(position, answer);
    this.saveLocalStorage(this._storageName);
  }

  getValue(position: number): Answer {
    let answer = this._answers.get(position);
    if (!answer) {
      answer = new Answer(position, -1, -1);
    }
    return answer;
  }

  deleteCache() {
    localStorage.clear();
    this._answers.clear();
  }

  private saveLocalStorage(name: string) {
    const answers: Answer[] = [];
    this._answers.forEach((answer: Answer, position: number) => {
      answers.push(answer);
    });
    localStorage.setItem(name, JSON.stringify(answers));
  }

  private loadLocalStorage(name: string) {
    const answers = JSON.parse(localStorage.getItem(name));
    if (answers) {
      answers.forEach((answer: Answer) => {
        this._answers.set(answer.questionId, answer);
      });
    }
  }
}
