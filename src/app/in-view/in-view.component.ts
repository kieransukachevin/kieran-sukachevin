import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
 } from '@angular/core';

// custom component to show the contents only if in view.
@Component({
  selector: 'app-in-view',
  templateUrl: './in-view.component.html',
  styleUrls: ['./in-view.component.css']
})
export class InViewComponent implements OnInit, OnDestroy {
  observer: IntersectionObserver | undefined;
  top = 0;
  options = {
    threshold: [0, 0.1, 0.4]
  }
  viewable = false;

  constructor(public element: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(this.intersectionCallback.bind(this), this.options);
    this.observer.observe(this.element.nativeElement);
    this.top = this.element.nativeElement.getBoundingClientRect().top;
  }

  intersectionCallback(entries: any, observer: any): void {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {

        // Make visible
        this.inView(entry);

      }
    });
  }

  inView(entry: any) {
    // console.log('top:', entry.boundingClientRect.top, 'window:', window.innerHeight, 'intersection:', entry.intersectionRatio);

    if (entry.intersectionRatio <= 0.4 && window.scrollY < this.top) {
      this.element.nativeElement.children[0].classList.remove('transition');
    }
    else {
      this.element.nativeElement.children[0].classList.add('transition');
    }

  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
