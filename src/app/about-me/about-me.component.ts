import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  description:string=`Experienced Full Stack .NET Developer specializing in .NET and Angular, with
      comprehensive training in both technologies and a proven track record of
      successfully launching complex web applications. Committed to applying my
      technical experience and leadership skills to achieve exceptional results in a
      dynamic and innovative environment.`

cvUrl:string='./files/Mahmoud_Abdo_.Net_Developer_CV.pdf';

}
