import { TestBed, inject } from '@angular/core/testing';

import { DetailsEvaluationService } from './details-evaluation.service';

describe('DetailsEvaluationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsEvaluationService]
    });
  });

  it('should be created', inject([DetailsEvaluationService], (service: DetailsEvaluationService) => {
    expect(service).toBeTruthy();
  }));
});
