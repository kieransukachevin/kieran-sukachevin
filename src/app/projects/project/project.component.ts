import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class Project implements OnInit, AfterViewInit {
  @Input() title: string | undefined;
  @Input() media: string | undefined;
  @Input() description: string | undefined;
  @Input() source: string | undefined;
  @Input() bottomMargin: string | undefined;
  isImg = false;

  intersectionObserver: IntersectionObserver | undefined;
  threshold = {
    threshold: Array.from(new Array(11), (_, i) => {return i * 0.1})
  };
  wrapperHeight: Number | undefined;

  positionFactor = 0.1;
  @ViewChild('projWrap') projWrap: ElementRef = new ElementRef('temp');
  @ViewChild('projDesc') projDesc: ElementRef = new ElementRef('temp');

  constructor() {}

  ngOnInit(): void {

    // Check if media is img or video.
    if (this.media?.includes('png')) {
      this.isImg = true;
    }

  }

  ngAfterViewInit(): void {
    this.wrapperHeight = this.projWrap.nativeElement.getBoundingClientRect().height;

    let callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {

          this.projDesc.nativeElement.style.top = `${-entry.intersectionRatio * 100 * this.positionFactor}%`;
  
        }
      });
    }
  
    this.intersectionObserver = new IntersectionObserver(callback, this.threshold);
    this.intersectionObserver.observe(this.projWrap.nativeElement);
  
  }
}
