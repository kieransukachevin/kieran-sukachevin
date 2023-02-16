import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  hide: boolean = true;
  oldScroll = 0;
  newScroll = 0;
  maxScroll = 50;
  overflow = "visible";
  notLoaded = true;
  maxWidth = "15em"
  maxHeight = "24em"
  width = this.maxWidth;
  height = this.maxHeight;
  h1Display = "block";

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  /**
   * Captures the scroll events and hides the header if scrolled fast
   * @returns null
   */
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.innerWidth > 800) {  // Return if in landscape mode
      return;
    }

    if (this.notLoaded) { // Once component has loaded, update the old scroll value
      this.oldScroll = window.scrollY;
      this.notLoaded = false;
    }

    this.newScroll = window.scrollY;

    if ( this.newScroll - this.oldScroll >= this.maxScroll && this.hide ) { // Hide the header if a fast scroll
        this.toggleHide();
    }

    this.oldScroll = this.newScroll;
  }

  /**
   * Hides or reveals the header when called
   */
  toggleHide() {
    if (this.hide) {  // Hide
      this.width = "0";
      this.height = "0";
      this.overflow = "hidden";
      this.h1Display = "none";
    }
    else {  // Reveal
      this.width = this.maxWidth;
      this.height = this.maxHeight;
      this.overflow = "visible";
      this.h1Display = "block";
    }
    this.hide = !this.hide; // Toggle hide
  }

}
