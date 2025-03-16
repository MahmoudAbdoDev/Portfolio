import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolioItems = [
    { name: 'WEB DESIGN', dark: false },
    { name: 'MOBILE DESIGN', dark: true },
    { name: 'LOGO DESIGN', dark: false },
    { name: 'WEB APPLICATION DEVELOPMENT', dark: true },
    { name: 'MOBILE APPLICATION DEVELOPMENT', dark: false },
    { name: 'PWA DEVELOPMENT', dark: true }
  ];

}


