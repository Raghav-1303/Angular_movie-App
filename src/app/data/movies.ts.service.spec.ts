import { TestBed } from '@angular/core/testing';

import { MoviesTsService } from './movies.ts.service';

describe('MoviesTsService', () => {
  let service: MoviesTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
