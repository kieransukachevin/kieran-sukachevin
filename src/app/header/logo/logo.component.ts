import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  name: string = 'assets/logo_white.png';
  @Input() h1Display: string | undefined;

  constructor(public logoArea: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

}
