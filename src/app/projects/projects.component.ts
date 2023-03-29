import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<any> = [];
  projectsLength: number = 0;
  bottomMargin: string = "5em";

  constructor(private projectsServ: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsServ.getProjectsInfo();
    this.projectsLength = this.projectsServ.getNumberOfProjects();
  }

  lessThan(left: number, right: number): boolean {
    return (left < right);
  }
}
