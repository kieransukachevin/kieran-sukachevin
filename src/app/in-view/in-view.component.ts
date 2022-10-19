import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild
 } from '@angular/core';

// custom component to show the contents only if in view.
@Component({
  selector: 'app-in-view',
  templateUrl: './in-view.component.html',
  styleUrls: ['./in-view.component.css']
})
export class InViewComponent implements OnInit, OnDestroy {
  inView: boolean = false;
  observer: IntersectionObserver | undefined;
  options = {
    threshold: [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4]
  }

  constructor(
    public element: ElementRef
  ) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(this.callback.bind(this), this.options);
    this.observer.observe(this.element.nativeElement);
  }

  callback(entries: any, observer: any): void {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        // make visible
        this.changeOpacity(entry);
        this.inView = true;
      }
    });
  }

  changeOpacity(entry: any) {
    if (entry.intersectionRatio <= 0.4) {
      this.element.nativeElement.style.opacity = entry.intersectionRatio + 0.2;
      this.element.nativeElement.style.blur = entry.intersectionRatio + 0.2;
    } else {
      this.element.nativeElement.style.opacity = 1.0;
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
