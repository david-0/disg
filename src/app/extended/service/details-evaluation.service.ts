import {Injectable} from '@angular/core';
import {DetailsService} from '../../service/details.service';
import {isNullOrUndefined} from 'util';

@Injectable()
export class DetailsEvaluationService {

  constructor(public detailsService: DetailsService) {
  }

  public evaluate(): number[] {
    return [this.evaluateDetail('details-d'),
      this.evaluateDetail('details-i'),
      this.evaluateDetail('details-s'),
      this.evaluateDetail('details-g')];
  }

  private evaluateDetail(key: string): number {
    let count = 0;
    let checked = 0;
    const values = this.detailsService.loadValues(key);
    if (isNullOrUndefined(values)) {
      return 0;
    }
    values.forEach(b => {
      b.forEach(m => {
        count++;
        if (m) {
          checked++;
        }
      });
    });
    return (checked / count);
  }
}
