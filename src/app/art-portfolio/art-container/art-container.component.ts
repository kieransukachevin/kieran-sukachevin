import { Component, ElementRef, Input, OnInit, ViewChild, ViewRef } from '@angular/core';

@Component({
  selector: 'app-art-container',
  templateUrl: './art-container.component.html',
  styleUrls: ['./art-container.component.css']
})
export class ArtContainerComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() bottomMargin: string = "0";
  @ViewChild('image') image: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {}

}
