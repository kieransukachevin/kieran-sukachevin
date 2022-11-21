import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: '.app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Kieran Sukachevin';
  sticky: boolean | undefined;
  zId: any;
  hide: boolean = true;
  opacity = 1;
  @ViewChild('topBar') topBar: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(){
    this.zId = this.topBar?.nativeElement.offsetHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.zId){
        this.sticky = true;
    } else {
        this.sticky = false;
    }
  }

  toggleHide() {
    if (this.hide) {
      let interval = setInterval(() => {
        this.opacity -= 0.1;
        if (this.opacity <= 0) {
          this.hide = !this.hide;
          clearInterval(interval)
        }
      }, 30);  
    }
    else {
      let interval = setInterval(() => {
        this.opacity += 0.1;
        if (this.opacity >= 1) {
          this.hide = !this.hide;
          clearInterval(interval)
        }
      }, 30);
    }
  }

}
