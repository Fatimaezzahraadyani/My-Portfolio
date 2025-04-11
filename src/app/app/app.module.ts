import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePortfolioComponent } from '../home-portfolio/home-portfolio.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ResumeComponent } from '../resume/resume.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'home-portfolio',component:HomePortfolioComponent},
  {path : 'about-portfolio',component:AboutMeComponent},
  {path : 'resume-portfolio',component:ResumeComponent},
];

@NgModule({
  declarations: [
    HomePortfolioComponent,
    AboutMeComponent,
    ResumeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class appRoutingModule{}
export class AppModule { }
