import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Project } from "./project.component";

describe("Project", () => {
  let component: Project;
  let fixture: ComponentFixture<Project>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
