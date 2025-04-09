import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePortfolioComponent } from '../home-portfolio/home-portfolio.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path : 'home-portfolio',component:HomePortfolioComponent},
];

@NgModule({
  declarations: [
    HomePortfolioComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
