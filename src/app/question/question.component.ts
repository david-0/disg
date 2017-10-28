import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Input,
  ViewChild,
  Renderer2,
  AfterViewChecked
} from '@angular/core';
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

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewChecked(): void {
    this.updateView();
  }

  change(type: string, number: string) {
    if (type === 'upup') {
      this.updatePriorities(0, +number);
    } else if (type === 'up') {
      this.updatePriorities(1, +number);
    } else if (type === 'down') {
      this.updatePriorities(2, +number);
    } else if (type === 'downdown') {
      this.updatePriorities(3, +number);
    }
    this.updateLastPriority();
    this.updateView();
    this.onAnswerChange.emit(this.answer);
    console.log(this.answer);
  }

  private updatePriorities(prio: number, statementNr: number) {
    this.answer.priorities[prio] = +statementNr;
    for (let i = 0; i < this.answer.priorities.length; i++) {
      if (i !== prio && this.answer.priorities[i] === statementNr) {
        this.answer.priorities[i] = -1;
      }
    }
  }

  private updateLastPriority() {
    if (this.answer.priorities.filter(p => p === -1).length === 1) {
      const missingPos = this.findMissingPosition();
      if (missingPos != null) {
        this.answer.priorities[missingPos] = this.findMissingNumber();
      }
    }
  }

  private findMissingPosition(): number {
    for (let i = 0; i < this.answer.priorities.length; i++) {
      if (this.answer.priorities[i] === -1) {
        return i;
      }
    }
    return null;
  }

  private findMissingNumber(): number {
    for (let i = 0; i < this.answer.priorities.length; i++) {
      if (this.answer.priorities.findIndex(p => p === i) === -1) {
        return i;
      }
    }
    return 0;
  }

  private updateView() {
    const cssClasses = ['best', 'middleUp', 'middleDown', 'worst'];
    const images = this.group.nativeElement.getElementsByTagName('svg');
    const spans = this.group.nativeElement.getElementsByTagName('span');
    for (let i = 0; i < this.question.statements.length; i++) {
      for (let j = 0; j < this.answer.priorities.length; j++) {
        if (this.answer.priorities[j] === i) {
          this.renderer.addClass(images[i * 4 + j], cssClasses[j]);
          this.renderer.addClass(spans[i], cssClasses[j]);
        } else {
          this.renderer.removeClass(images[i * 4 + j], cssClasses[j]);
          this.renderer.removeClass(spans[i], cssClasses[j]);
        }
      }
    }
  }
}
