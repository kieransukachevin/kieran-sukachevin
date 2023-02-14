import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtPortfolioService {
  artNames: Array<string> = [];
  numberOfNames: number = 22;

  constructor() {
    this.artNames = Array.from(Array(this.numberOfNames), (_,x) => String(x))
  }

  getArtNames(): Array<string> {
    return this.artNames;
  }

  getNumberOfNames(): number {
    return this.numberOfNames;
  }
}
