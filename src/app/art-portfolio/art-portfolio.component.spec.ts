import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtPortfolioComponent } from './art-portfolio.component';

describe('ArtPortfolioComponent', () => {
  let component: ArtPortfolioComponent;
  let fixture: ComponentFixture<ArtPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
