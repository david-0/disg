import {Component, OnInit} from '@angular/core';
import {EvaluationService} from '../service/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  public result: number[];
  private quadrantWith = 200;

  constructor(private evaluationService: EvaluationService) {
  }

  ngOnInit() {
    this.result = this.evaluationService.evaluate();
  }

  calc(points: number): number {
    const value = 1 / 30 * (points - 10) * this.quadrantWith
    console.info(points + '(' + value + ')');
    return 1 / 30 * (points - 10 ) * this.quadrantWith;
  }
}
