import { Component } from '@angular/core';

@Component({
    selector : 'navbar',
    templateUrl : './navbar.component.html',
    styleUrls : ['./navbar.component.css']
})
export class NavBarComponent { 
  option1 : string;
  option2 : string;
  option3 : string;
  option4 : string;
  option5 : string;
  option6 : string;
  constructor(){
    this.option1 = "Home";
    this.option2 = "Mentors";
    this.option3 = "Courses";
    this.option4 = "About";
    this.option5 = "Contact Us";
    this.option6 = "Bootcamp Detail";
  }
}