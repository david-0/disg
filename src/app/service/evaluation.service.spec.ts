import {TestBed, inject} from '@angular/core/testing';

import {EvaluationService} from './evaluation.service';
import {DimesionResult} from '../model/dimesion-result';
import {DiagramResult} from '../model/diagram-result';

describe('EvaluationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvaluationService]
    });
  });

  it('should be created', inject([EvaluationService], (service: EvaluationService) => {
    expect(service).toBeTruthy();
  }));

  it('should evaluate mostLike to expected', inject([EvaluationService], (service: EvaluationService) => {
    const result = service.evalMostLike(7, 8, 1, 8);
    const expected = new DiagramResult(
      new DimesionResult(20, 5),
      new DimesionResult(24, 6),
      new DimesionResult(3, 1),
      new DimesionResult(12, 3));
    expect(result).toEqual(expected);
  }));

  it('should evaluate leastLike to expected', inject([EvaluationService], (service: EvaluationService) => {
    const result = service.evalLeastLike(6, 5, 13, 4);
    const expected = new DiagramResult(
      new DimesionResult(19, 5),
      new DimesionResult(21, 6),
      new DimesionResult(3, 1),
      new DimesionResult(11, 3));
    expect(result).toEqual(expected);
  }));

  it('should evaluate complete to expected', inject([EvaluationService], (service: EvaluationService) => {
    const result = service.evalCompete(1, 3, -12, 4);
    const expected = new DiagramResult(
      new DimesionResult(19, 5),
      new DimesionResult(23, 6),
      new DimesionResult(2 - 1 / 14, 1),
      new DimesionResult(10, 3));
    expect(result).toEqual(expected);
  }));
});
