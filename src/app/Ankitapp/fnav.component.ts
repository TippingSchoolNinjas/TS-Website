import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
  import { Parallax,
         ParallaxConfig } from './parallax.directive';

@Component({
  selector: 'fnav',
  templateUrl: './fnav.component.html',
})


export class fnavComponent implements OnInit {

  public viz: string;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

   @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log("function running");
    let number = this.document.documentElement.scrollTop;
    console.log(this.document.documentElement.scrollTop);
    if (number > 800) {
      this.viz="hidden";
      console.log("scroll 200 completed");
    } else {
      this.viz="";
      console.log("scroll unencountered");
    }
  }
  
}