import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtContainerComponent } from './art-container.component';

describe('ArtContainerComponent', () => {
  let component: ArtContainerComponent;
  let fixture: ComponentFixture<ArtContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
