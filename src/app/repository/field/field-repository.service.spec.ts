import { TestBed } from '@angular/core/testing';

import { FieldRepositoryService } from './field-repository.service';

describe('FieldRepositoryService', () => {
  let service: FieldRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
