import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewRef } from '@angular/core';

@Component({
  selector: 'app-art-container',
  templateUrl: './art-container.component.html',
  styleUrls: ['./art-container.component.css']
})
export class ArtContainerComponent implements OnInit, AfterViewInit {
  @Input() name: string | undefined;
  @ViewChild('image') image: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
