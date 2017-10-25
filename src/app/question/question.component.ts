import {
  Component, OnInit, ElementRef, EventEmitter, Output, Input, ViewChild, Renderer2,
  AfterContentChecked, DoCheck, AfterViewChecked
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
      this.answer.best = +number;
      if (this.answer.best === this.answer.middle1) {
        this.answer.middle1 = -1;
      }
      if (this.answer.best === this.answer.middle2) {
        this.answer.middle2 = -1;
      }
      if (this.answer.best === this.answer.worst) {
        this.answer.worst = -1;
      }
    }
    if (type === 'up') {
      this.answer.middle1 = +number;
      if (this.answer.middle1 === this.answer.best) {
        this.answer.best = -1;
      }
      if (this.answer.middle1 === this.answer.middle2) {
        this.answer.middle2 = -1;
      }
      if (this.answer.middle1 === this.answer.worst) {
        this.answer.worst = -1;
      }
    }
    if (type === 'down') {
      this.answer.middle2 = +number;
      if (this.answer.middle2 === this.answer.best) {
        this.answer.best = -1;
      }
      if (this.answer.middle2 === this.answer.middle1) {
        this.answer.middle1 = -1;
      }
      if (this.answer.middle2 === this.answer.worst) {
        this.answer.worst = -1;
      }
    }
    if (type === 'downdown') {
      this.answer.worst = +number;
      if (this.answer.worst === this.answer.best) {
        this.answer.best = -1;
      }
      if (this.answer.worst === this.answer.middle1) {
        this.answer.middle1 = -1;
      }
      if (this.answer.worst === this.answer.middle2) {
        this.answer.middle2 = -1;
      }
    }
    this.updateView();
    this.onAnswerChange.emit(this.answer);
    console.log(this.answer);
  }

  private updateView() {
    const images = this.group.nativeElement.getElementsByTagName('svg');
    const spans = this.group.nativeElement.getElementsByTagName('span');
    for (let i = 0; i < this.question.statements.length; i++) {
      const imageUpUp = images[i * 4];
      const imageUp = images[i * 4 + 1];
      const imageDown = images[i * 4 + 2];
      const imageDownDown = images[i * 4 + 3];
      const span = spans[i];
      if (this.answer.best === i) {
        this.renderer.addClass(imageUpUp, 'best');
        this.renderer.removeClass(imageUp, 'middleUp');
        this.renderer.removeClass(imageDown, 'middleDown');
        this.renderer.removeClass(imageDownDown, 'worst');
        this.renderer.addClass(span, 'best');
        this.renderer.removeClass(span, 'worst');
      } else if (this.answer.middle1 === i) {
        this.renderer.removeClass(imageUpUp, 'best');
        this.renderer.addClass(imageUp, 'middleUp');
        this.renderer.removeClass(imageDown, 'middleDown');
        this.renderer.removeClass(imageDownDown, 'worst');
        this.renderer.removeClass(span, 'best');
        this.renderer.removeClass(span, 'worst');
      } else if (this.answer.middle2 === i) {
        this.renderer.removeClass(imageUpUp, 'best');
        this.renderer.removeClass(imageUp, 'middleUp');
        this.renderer.addClass(imageDown, 'middleDown');
        this.renderer.removeClass(imageDownDown, 'worst');
        this.renderer.removeClass(span, 'best');
        this.renderer.removeClass(span, 'worst');
      } else if (this.answer.worst === i) {
        this.renderer.removeClass(imageUpUp, 'best');
        this.renderer.removeClass(imageUp, 'middleUp');
        this.renderer.removeClass(imageDown, 'middleDown');
        this.renderer.addClass(imageDownDown, 'worst');
        this.renderer.removeClass(span, 'best');
        this.renderer.addClass(span, 'worst');
      } else {
        this.renderer.removeClass(imageUpUp, 'best');
        this.renderer.removeClass(imageUp, 'middleUp');
        this.renderer.removeClass(imageDown, 'middleDown');
        this.renderer.removeClass(imageDownDown, 'worst');
        this.renderer.removeClass(span, 'best');
        this.renderer.removeClass(span, 'worst');
      }
    }
  }
}
