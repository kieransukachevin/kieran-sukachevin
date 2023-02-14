import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  name: string = 'assets/logo.png';
  hover: boolean = true;
  headerOpacity = 0;
  logoOpacity = 1;

  constructor(public logoArea: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Reveal header and hide logo
    this.logoArea.nativeElement.addEventListener("mouseover", (event: any) => { 
      let interval = setInterval(() => {
        this.headerOpacity += 0.1;
        this.logoOpacity -= 0.1;
        if (this.headerOpacity >= 1 || !this.hover) {
          clearInterval(interval)
        }
      }, 70);}
    );

    // Hide header and reveal logo
    this.logoArea.nativeElement.addEventListener("mouseleave", (event: any) => {
      this.hover = false;
      let interval = setInterval(() => {
        this.headerOpacity -= 0.1;
        this.logoOpacity += 0.1;
        if (this.headerOpacity <= 0) {
          clearInterval(interval)
          this.hover = true;
        }
      }, 70);
    });
  }

}
