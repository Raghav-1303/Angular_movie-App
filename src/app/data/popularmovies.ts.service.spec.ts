import { TestBed } from '@angular/core/testing';

import { PopularmoviesTsService } from './popularmovies.ts.service';

describe('PopularmoviesTsService', () => {
  let service: PopularmoviesTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularmoviesTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
