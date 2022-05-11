import { TestBed } from '@angular/core/testing';

import { MenuRepositoryService } from './menu-repository.service';

describe('MenuRepositoryService', () => {
  let service: MenuRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
