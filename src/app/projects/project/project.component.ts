import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class Project implements OnInit {
  @Input() title: string | undefined;
  @Input() img: string | undefined;
  @Input() description: string | undefined;
  @Input() source: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
