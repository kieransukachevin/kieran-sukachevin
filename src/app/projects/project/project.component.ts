import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class Project implements OnInit, AfterViewInit {
  @Input() title: string | undefined;
  @Input() img: string | undefined;
  @Input() description: string | undefined;
  @Input() source: string | undefined;
  @Input() bottomMargin: string | undefined;

  positionFactor = 0.15;
  @ViewChild('projWrap') projWrap: ElementRef = new ElementRef('temp');
  @ViewChild('projDesc') projDesc: ElementRef = new ElementRef('temp');

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  @HostListener('window:scroll')
  onScroll() {
    let topPos = this.projWrap?.nativeElement.getBoundingClientRect().top;  // Wrapper position relative to top

    if (topPos > 0 && topPos < window.innerHeight) {  // Element within view window

      // Update description top position based on wrapper top position
      this.projDesc.nativeElement.style.top = `
        ${-((topPos / window.innerHeight) * this.positionFactor) * 100}%
      `;

    }
  }
}
