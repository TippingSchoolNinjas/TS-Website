import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'cirriculum',
  templateUrl: './cirriculum.component.html',
})
export class cirriculumComponent {

   public viz: string;
   public Se: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

   @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log("function running");
    let number = this.document.documentElement.scrollTop;
    console.log(this.document.documentElement.scrollTop);
    if (number > 1800) {
      this.viz="block";
      this.Se=true;
      console.log("scroll 200 completed");
    } else {
      this.viz="none";
       this.Se=false;
      console.log("scroll unencountered");
    }
  }
 
  
}