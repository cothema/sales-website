import { TestBed } from '@angular/core/testing';

import { TranslateWrapperService } from './translate-wrapper.service';

describe('TranslateWrapperService', () => {
  let service: TranslateWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
