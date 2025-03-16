import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 email: string = 'mahmoudibra798@gmail.com';
 phoneNumber:string='+20 112 986 3698';
 facebookUrl:string='https://www.facebook.com/profile.php?id=61571868532437';
 linkedInUrl:string='https://www.linkedin.com/in/mahmoud-ibrahim-abdo/';
gitHubUrl:string='https://github.com/MahmoudAbdoDev';

checkSocialMedia():void{
  alert('Thank you for your interest, Plz Click Ok & Check  my Social Media...');
}
}
