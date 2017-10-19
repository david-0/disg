import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {Answer} from '../model/answer';
import {Question} from '../model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @ViewChild('group') group: ElementRef;
  @Input() question: Question;
  @Output() onAnswerChange = new EventEmitter<Answer>();

  public answer: Answer;
/*  public up: any[] = [];
  public down: any[] = [];
  public span: any[] = [];*/

  constructor() {
  }

  ngOnInit() {
    this.answer = new Answer(this.question.id, -1, -1);
  }

  changeBest(id: number) {
    console.log(id);
  }

  change(type: string, number: string) {
    if (type === 'up') {
      this.answer.best = +number;
      if (this.answer.best === this.answer.worst) {
        this.answer.worst = -1;
      }
    }
    if (type === 'down') {
      this.answer.worst = +number;
      if (this.answer.worst === this.answer.best) {
        this.answer.best = -1;
      }
    }
    this.updateView();
    console.log(this.answer);
  }

  private updateView() {
    const images = this.group.nativeElement.getElementsByTagName('img');
    const spans = this.group.nativeElement.getElementsByTagName('span');
    for (let i = 0; i < 4; i++) {
      if (this.answer.best === i) {
        images[i * 2].src = 'assets/img/thumb-up-green.svg';
      } else {
        images[i * 2].src = 'assets/img/thumb-up.svg';
      }
      if (this.answer.worst === i) {
        images[i * 2 + 1].src = 'assets/img/thumb-down-red.svg';
      } else {
        images[i * 2 + 1].src = 'assets/img/thumb-down.svg';
      }
/*      this.up.push(images[i * 2]);
      this.down.push(images[i * 2 + 1]);
      this.span.push(spans[i]);*/
    }
  }
}
