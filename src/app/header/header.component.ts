import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  hide: boolean = true;
  height = 280;
  maxHeight = 280;
  speedChange = 10;
  oldScroll = 0;
  newScroll = 0;
  maxScroll = 50;
  overflow = "visible";
  notLoaded = true;
  display = "block";

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
    var speed = 0;
    if (this.hide) {  // Hide
      this.overflow = "hidden";
      let interval = setInterval(() => {
        if (this.height > 0) {
          speed += this.speedChange;
          this.height -= speed;
        }
        else {
          this.hide = !this.hide;
          this.height = 0;
          this.display = "none";
          clearInterval(interval);
        }
      }, 30);  
    }
    else {  // Reveal
      this.display = "block";
      let interval = setInterval(() => {
        if (this.height < this.maxHeight) {
          speed += this.speedChange;
          this.height += speed;
        }
        else {
          this.overflow = "visible";
          this.hide = !this.hide;
          this.height = this.maxHeight;
          clearInterval(interval);
        }
      }, 30);
    }
  }

}
