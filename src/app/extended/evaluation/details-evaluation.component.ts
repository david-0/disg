import {Component, OnInit} from '@angular/core';
import {EvaluationService} from '../../service/evaluation.service';
import {DetailsEvaluationService} from '../service/details-evaluation.service';

@Component({
  selector: 'app-details-evaluation',
  templateUrl: './details-evaluation.component.html',
  styleUrls: ['./details-evaluation.component.scss']
})
export class DetailsEvaluationComponent implements OnInit {

  public detailValues: { name: string, value: number, className: string }[] = [];
  public values: { name: string, value: number, percent: number, className: string }[] = [];

  constructor(public detailsEvaluationService: DetailsEvaluationService,
              public evaluationService: EvaluationService) {
  }

  ngOnInit() {
    const detailResults = this.detailsEvaluationService.evaluate();
    this.detailValues.push({name: 'D', value: detailResults[0], className: 'red'});
    this.detailValues.push({name: 'I', value: detailResults[1], className: 'yellow'});
    this.detailValues.push({name: 'S', value: detailResults[2], className: 'green'});
    this.detailValues.push({name: 'G', value: detailResults[3], className: 'blue'});
    const results = this.evaluationService.evaluate();
    this.values.push({name: 'D', value: results[0], percent: this.percent(results[0]), className: 'red'});
    this.values.push({name: 'I', value: results[1], percent: this.percent(results[1]), className: 'yellow'});
    this.values.push({name: 'S', value: results[2], percent: this.percent(results[2]), className: 'green'});
    this.values.push({name: 'G', value: results[3], percent: this.percent(results[3]), className: 'blue'});
  }

  private percent(points: number): number {
    // max points: 40, min points: 10
    return (points - 10) / 30;
  }

}
