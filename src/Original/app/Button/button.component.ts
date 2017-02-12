import { Component } from '@angular/core';

@Component({
  selector: 'major-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent { 
  option1 : string;
  option2 : string;
  constructor(){
    this.option1 = "Programming";
    this.option2 = "Machine Learning";
  }
}