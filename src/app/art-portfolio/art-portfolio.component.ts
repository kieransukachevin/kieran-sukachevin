import { Component, OnInit } from '@angular/core';
import { ArtPortfolioService } from './art-portfolio.service';


@Component({
  selector: 'app-art-portfolio',
  templateUrl: './art-portfolio.component.html',
  styleUrls: ['./art-portfolio.component.css'],
})
export class ArtPortfolioComponent implements OnInit {
  artNames: Array<string> | undefined;
  numberOfArtNames: number = 0;
  bottomMargin: string = "5em";

  constructor(private artServ: ArtPortfolioService) { }

  ngOnInit(): void {
    this.artNames = this.artServ.getArtNames();
    this.numberOfArtNames = this.artServ.getNumberOfNames();
  }

  lessThan(left: number, right: number): boolean {
    return (left < right);
  }
}
