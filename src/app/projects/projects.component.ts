import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<any> | undefined;

  constructor(private projectsServ: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsServ.getProjectsInfo();
  }

}
