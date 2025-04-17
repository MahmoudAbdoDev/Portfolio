import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  portfolioItems = [
    { name: 'WEB DESIGN', dark: false ,imageUrl:'/protofoliogallery/park.png' ,hrefUrl: 'https://real-estate-template-7naweys-projects.vercel.app/portfolio.html' },
    { name: 'MOBILE DESIGN', dark: true ,imageUrl:'' ,hrefUrl: '' },
    { name: 'LOGO DESIGN', dark: false, imageUrl:'' ,hrefUrl: '' },
    { name: 'WEB APPLICATION DEVELOPMENT', dark: true, imageUrl:'' ,hrefUrl: '' },
    { name: 'MOBILE APPLICATION DEVELOPMENT', dark: false ,imageUrl:'' ,hrefUrl: '' },
    { name: 'PWA DEVELOPMENT', dark: true ,imageUrl:'' ,hrefUrl: '' }
  ];




  
}


