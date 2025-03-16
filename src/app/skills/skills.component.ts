import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

briefWords:string=`Experienced Full Stack Web Developer proficient in .NET and Angular, specializing in building scalable and
      efficient web applications.
      Skilled in front-end and back-end development, API integration, and database management.`;

 skills = [
    { name: 'Angular', percentage: 90 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'C# & .NET', percentage: 88 },
    { name: 'SQL Server', percentage: 80 },
    { name: 'Entity Framework', percentage: 75 },
    { name: 'REST APIs', percentage: 85 },
    { name: 'Bootstrap & Tailwind', percentage: 80 },
    { name: 'Git & DevOps', percentage: 70 }
  ];


}
