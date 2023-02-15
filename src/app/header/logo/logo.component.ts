import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  name: string = 'assets/logo.png';

  constructor(public logoArea: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

}
