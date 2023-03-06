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
 } from '@angular/core';

// custom component to show the contents only if in view.
@Component({
  selector: 'app-in-view',
  templateUrl: './in-view.component.html',
  styleUrls: ['./in-view.component.css']
})
export class InViewComponent implements OnInit, OnDestroy {
  observer: IntersectionObserver | undefined;
  options = {
    threshold: [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4]
  }
  viewable = false;

  constructor(public element: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(this.intersectionCallback.bind(this), this.options);
    this.observer.observe(this.element.nativeElement);
    this.element.nativeElement.children[0].style.transition = "box-shadow var(--animation-speed)";
  }

  intersectionCallback(entries: any, observer: any): void {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {

        // make visible
        this.inView(entry);

      }
    });
  }

  inView(entry: any) {
    if (entry.intersectionRatio <= 0.4) {

      // Remove box-shadow
      this.element.nativeElement.children[0].style.boxShadow = "none";

      // Remove scale-animation
      this.element.nativeElement.children[0].style.animationName = 'small-scale';  // Class name comes from universal styles
      this.element.nativeElement.children[0].style.animationFillMode = 'forwards';
      this.element.nativeElement.children[0].style.animationDuration = '0.2s';

    } 
    else {

      // Add box-shadow
      this.element.nativeElement.children[0].style.boxShadow = "0 0 10px 2px rgb(37, 37, 37, 0.2)";

      // Add scale animation
      this.element.nativeElement.children[0].style.animationName = 'large-scale'; // Class name comes from universal styles
      this.element.nativeElement.children[0].style.animationFillMode = 'forwards';
      this.element.nativeElement.children[0].style.animationDuration = '0.2s';
      
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
