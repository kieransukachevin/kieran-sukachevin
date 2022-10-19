import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  fruit: string="";
  constructor() { 
    this.fruit = "Pear";
  }

  ngOnInit(): void {
  }

}
