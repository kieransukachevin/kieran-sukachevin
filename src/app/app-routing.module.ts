import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtPortfolioComponent } from "./art-portfolio/art-portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  { path: "art", component: ArtPortfolioComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  ArtPortfolioComponent,
  ContactComponent,
  ProjectsComponent
];
