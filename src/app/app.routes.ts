import { SkillsComponent } from './skills/skills.component';
import { Routes } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [

{path:'' ,component:HeroSectionComponent,title:'Home'},
{path:'about-me' ,component:AboutMeComponent,title:'About Me'},
{path:'skills' ,component:SkillsComponent,title:'Skills'},
{path:'portfolio' ,component:PortfolioComponent,title:'Portfolio'},
{path:'footer' ,component:FooterComponent,title:'Contact Me'},
{path:'**' ,component:NotFoundComponent,title:'Not Found'}




];
