import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtPortfolioService {
  artNames: Array<string> | undefined;

  constructor() {
    this.artNames = Array.from(Array(22), (_,x) => String(x))
  }

  getArtNames() {
    return this.artNames;
  }
}
