import { TestBed } from '@angular/core/testing';

import { TrainingsetService } from './trainingset.service';

describe('TrainingsetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingsetService = TestBed.get(TrainingsetService);
    expect(service).toBeTruthy();
  });
});
