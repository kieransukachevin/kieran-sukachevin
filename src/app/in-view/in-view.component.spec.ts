import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InViewComponent } from './in-view.component';

describe('NguiInViewComponent', () => {
  let component: InViewComponent;
  let fixture: ComponentFixture<InViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
