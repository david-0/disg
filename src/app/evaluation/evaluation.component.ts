import {Component, OnInit} from '@angular/core';
import {EvaluationService} from '../service/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  public result: number[];

  constructor(private evaluationService: EvaluationService) {
  }

  ngOnInit() {
    this.result = this.evaluationService.evaluate();
  }

}
