import { TestBed } from '@angular/core/testing';

import { FeatureLevelService } from './feature-level.service';

describe('FeatureLevelService', () => {
  let service: FeatureLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
