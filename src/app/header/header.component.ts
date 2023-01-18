import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  title = 'Kieran Sukachevin';
  sticky: boolean | undefined;
  hide: boolean = true;
  opacity = 1;
  height = 280;
  maxHeight = 280;
  speedChange = 10;
  oldScroll = 0;
  newScroll = 0;
  overflow = "visible";
  notLoaded = true;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.notLoaded) {
      this.oldScroll = window.scrollY;
      this.notLoaded = false;
    }
    this.newScroll = window.scrollY;
    console.log(this.newScroll, this.oldScroll);
    if ( this.newScroll - this.oldScroll >= 50 && this.hide ) {
        this.toggleHide();
    }
    this.oldScroll = this.newScroll;
  }

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
          clearInterval(interval);
        }
      }, 30);  
    }
    else {  // Reveal
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
