import { TestBed } from '@angular/core/testing';

import { ArtPortfolioService } from './art-portfolio.service';

describe('ArtPortfolioService', () => {
  let service: ArtPortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtPortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
