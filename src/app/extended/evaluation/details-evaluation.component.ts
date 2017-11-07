import {Component, OnInit} from '@angular/core';
import {DetailsEvaluationService} from '../service/details-evaluation.service';

@Component({
  selector: 'app-details-evaluation',
  templateUrl: './details-evaluation.component.html',
  styleUrls: ['./details-evaluation.component.scss']
})
export class DetailsEvaluationComponent implements OnInit {

  public values: {name: string, value: number}[] = [];

  constructor(public detailsEvaluationService: DetailsEvaluationService) { }

  ngOnInit() {
    const results = this.detailsEvaluationService.evaluate();
    this.values.push({name: 'Dominate', value: results[0]});
    this.values.push({name: 'Initive', value: results[1]});
    this.values.push({name: 'Stetig', value: results[2]});
    this.values.push({name: 'Gewissenhaft', value: results[3]});
  }

}
