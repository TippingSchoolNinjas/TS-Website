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
  constructor(){
    this.option1 = "Home";
    this.option2 = "Mentors";
    this.option3 = "Courses"
  }
}