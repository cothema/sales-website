import { TestBed } from '@angular/core/testing';

import { AuthorRepositoryService } from './author-repository.service';

describe('AuthorRepositoryService', () => {
  let service: AuthorRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
