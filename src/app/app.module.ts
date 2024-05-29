import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ArtPortfolioService } from "./art-portfolio/art-portfolio.service";
import { NavComponent } from "./header/nav/nav.component";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { InViewComponent } from "./in-view/in-view.component";
import { ArtContainerComponent } from "./art-portfolio/art-container/art-container.component";
import { Project } from "./projects/project/project.component";
import { LogoComponent } from "./header/logo/logo.component";
import { HamburgerMenuComponent } from "./header/hamburger-menu/hamburger-menu.component";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routingComponents,
    FooterComponent,
    HeaderComponent,
    InViewComponent,
    ArtContainerComponent,
    Project,
    LogoComponent,
    HamburgerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserDynamicTestingModule
  ],
  exports: [
    AppComponent,
    NavComponent,
    routingComponents,
    FooterComponent,
    HeaderComponent,
    InViewComponent,
    ArtContainerComponent,
    Project,
    LogoComponent,
    HamburgerMenuComponent
  ],
  providers: [ArtPortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
