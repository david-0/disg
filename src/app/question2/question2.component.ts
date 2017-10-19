import {Component, OnInit, ElementRef, EventEmitter, Output, Input, ViewChild, Renderer2} from '@angular/core';
import {Answer} from '../model/answer';
import {Question} from '../model/question';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss']
})
export class Question2Component implements OnInit {

  @ViewChild('group') group: ElementRef;
  @Input() question: Question;
  @Output() onAnswerChange = new EventEmitter<Answer>();

  public answer: Answer;

  /*  public up: any[] = [];
    public down: any[] = [];
    public span: any[] = [];*/
  constructor(private renderer: Renderer2) {
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
    const images = this.group.nativeElement.getElementsByTagName('svg');
    const spans = this.group.nativeElement.getElementsByTagName('span');
    for (let i = 0; i < 4; i++) {
      const imageUp = images[i * 2];
      const imageDown = images[i * 2 + 1];
      const span = spans[i];
      if (this.answer.best === i) {
        this.renderer.addClass(imageUp, 'best');
        this.renderer.removeClass(imageDown, 'worst');
        this.renderer.addClass(span, 'best');
        this.renderer.removeClass(span, 'worst');
      } else if (this.answer.worst === i) {
        this.renderer.addClass(imageDown, 'worst');
        this.renderer.removeClass(imageUp, 'best');
        this.renderer.addClass(span, 'worst');
        this.renderer.removeClass(span, 'best');
      } else {
        this.renderer.removeClass(imageUp, 'best');
        this.renderer.removeClass(imageDown, 'worst');
        this.renderer.removeClass(span, 'best');
        this.renderer.removeClass(span, 'worst');
      }
    }
  }
}
