import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { FooterComponent } from "../footer/footer.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-hero-section',
  imports: [AboutMeComponent, PortfolioComponent, FooterComponent, SkillsComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
name:string='Mahmoud Abdo';
title:string='Full Stack Web Developer .Net & Angular';

welcome():void{
  alert('Welcome to My Profile, Plz Click Ok & Continue Scroll Down.....');
}

}
