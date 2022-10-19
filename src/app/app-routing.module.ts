import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtPortfolioComponent } from './art-portfolio/art-portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'art', component: ArtPortfolioComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ArtPortfolioComponent, ContactComponent, ProjectsComponent, AboutComponent];
