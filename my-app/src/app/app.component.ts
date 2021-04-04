import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular Application';

  
  /*
  userName: string = 'Ankit';
  mobileNo: number = 9898343434;
  emailId: string = 'ankit@ngdevelop.tech';
  skills: string[] = ['Java', 'Angular'];
  */

  /*
  //initializing the property in the constructor
  userName: string;
  mobileNo: number;
  emailId: string;
  skills: string[];
  
  constructor()
  {
    
    this.userName = 'Ankit';
    this.mobileNo = 9898343434;
    this.emailId = 'ankit@ngdevelop.tech';  
    this.skills = ['Java', 'Angular'];
    this.skills.push('.Net');
    
    
  }
  
  addSkill(skill: string)
  {
    this.skills.push(skill);
  }
  */
  user: User;
  constructor()
  {
    this.user = new User();
    this.user.userName = 'Ankit';
    this.user.mobileNo = 9898343434;
    this.user.emailId = 'ankit@ngdevelop.tech';
  }
}
