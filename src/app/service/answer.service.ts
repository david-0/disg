import {Injectable} from '@angular/core';
import {Answer} from '../model/answer';

@Injectable()
export class AnswerService {
  private _answer = new Map<number, Answer>();
  private _storageName = 'default';

  constructor() {
  }

  public get storageName() {
    return this.storageName;
  }

  public set storageName(name: string) {
    this.storageName = name;
  }

  setValue(position: number, answer: Answer) {
    this._answer.set(position, answer);
    this.saveLocalStorage(this._storageName);
  }

  private saveLocalStorage(name: string) {
    localStorage.setItem(name, JSON.stringify(this._answer));
  }

}
