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
  options = {
    threshold: [0, 0.1, 0.4]
  }
  viewable = false;

  constructor(public element: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(this.intersectionCallback.bind(this), this.options);
    this.observer.observe(this.element.nativeElement);
    this.element.nativeElement.children[0].style.transition = "box-shadow var(--animation-speed)";

    if (this.element.nativeElement.getBoundingClientRect().top < (window.innerHeight - window.innerHeight / 10 )) {
      this.element.nativeElement.children[0].classList.add('transition');
    }
  }

  intersectionCallback(entries: any, observer: any): void {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {

        // make visible
        this.inView(entry);

      }
    });
  }

  // @HostListener('window:scroll', ['event'])
  // scroll(event: any) {
  //   console.log('top:', this.element.nativeElement.getBoundingClientRect().top)

  //   if (this.element.nativeElement.getBoundingClientRect().top < (window.innerHeight - window.innerHeight / 4 )) {
  //     this.element.nativeElement.children[0].classList.add('transition');
  //   }

  //   if (this.element.nativeElement.getBoundingClientRect().top > window.innerHeight) {
  //     this.element.nativeElement.children[0].classList.remove('transition');
  //   }
  // }

  inView(entry: any) {
    // console.log('top:', entry.boundingClientRect.top, 'window:', window.innerHeight, 'intersection:', entry.intersectionRatio);
    if (entry.intersectionRatio <= 0.4) {
      this.element.nativeElement.children[0].classList.remove('visible');
      // this.element.nativeElement.children[0].classList.remove('transition');

    //   // Remove box-shadow
    //   this.element.nativeElement.children[0].style.boxShadow = "none";

    //   // Remove scale-animation
    //   this.element.nativeElement.children[0].style.animationName = 'small-scale';  // Class name comes from universal styles
    //   this.element.nativeElement.children[0].style.animationFillMode = 'forwards';
    //   this.element.nativeElement.children[0].style.animationDuration = '0.2s';

    } 
    else {
      // this.element.nativeElement.children[0].style.animationName = 'animation-keyframes';
      // this.element.nativeElement.children[0].style.animationDirection = 'normal';
      // this.element.nativeElement.children[0].style.animationFillMode = 'forwards';
      // this.element.nativeElement.children[0].style.animationDuration = '0.5s';
      this.element.nativeElement.children[0].classList.add('transition');
      this.element.nativeElement.children[0].classList.add('visible');

    //   // Add box-shadow
    //   this.element.nativeElement.children[0].style.boxShadow = "0 0 10px 2px rgb(37, 37, 37, 0.2)";

    //   // Add scale animation
    //   this.element.nativeElement.children[0].style.animationName = 'large-scale'; // Class name comes from universal styles
    //   this.element.nativeElement.children[0].style.animationFillMode = 'forwards';
    //   this.element.nativeElement.children[0].style.animationDuration = '0.2s';
    
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
