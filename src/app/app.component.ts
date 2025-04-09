import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterPortfolioComponent } from './footer-portfolio/footer-portfolio.component';
import { HomePortfolioComponent } from './home-portfolio/home-portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterPortfolioComponent,HomePortfolioComponent,AboutMeComponent,ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPort-Folio';
}
