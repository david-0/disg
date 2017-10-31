import {Component, ElementRef, EventEmitter, Output, Input, ViewChild, AfterViewChecked} from '@angular/core';
import {Answer} from '../model/answer';
import {Question} from '../model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements AfterViewChecked {
  @ViewChild('group') group: ElementRef;
  @Input() question: Question;
  @Input() answer: Answer;
  @Output() onAnswerChange = new EventEmitter<Answer>();

  constructor() {
  }

  ngAfterViewChecked(): void {
  }

  change(points: number, statementNr: string) {
    this.updatePriorities(points, +statementNr);
    console.info('' + points + ' ' + statementNr);
    this.updateLastPriority();
    this.onAnswerChange.emit(this.answer);
  }

  private updatePriorities(points: number, statementNr: number) {
    this.answer.priorities[statementNr] = +points;
    for (let i = 0; i < 4; i++) {
      if (i !== statementNr && this.answer.priorities[i] === +points) {
        this.answer.priorities[i] = 0;
      }
    }
  }

  private updateLastPriority() {
    if (this.answer.priorities.filter(p => p === 0).length === 1) {
      const missingPos = this.findMissingPosition();
      if (missingPos != null) {
        this.answer.priorities[missingPos] = this.findMissingNumber();
      }
    }
  }

  private findMissingPosition(): number {
    const index = this.answer.priorities.findIndex(p => p === 0);
    return (index === -1) ? null : index;
  }

  private findMissingNumber(): number {
    for (let i = 1; i <= this.answer.priorities.length; i++) {
      if (this.answer.priorities.findIndex(p => p === i) === -1) {
        return i;
      }
    }
    return 0;
  }
}
