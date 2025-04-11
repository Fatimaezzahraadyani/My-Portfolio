import { Routes } from '@angular/router';
import { HomePortfolioComponent } from './home-portfolio/home-portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { NgModel } from '@angular/forms';




export const routes: Routes = [
  {path : 'home-portfolio',
    component:HomePortfolioComponent
    },
  {path : 'about-portfolio',
    component:AboutMeComponent
    },
  {path : 'resume-portfolio',
    component:ResumeComponent
    },
  
];
