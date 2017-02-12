import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'lnav',
  templateUrl: './lnav.component.html',
})
export class lnavComponent implements OnInit {

  public poz: string;
  public topVal: string;


  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

   @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log("function running");
    let number = this.document.documentElement.scrollTop;
    console.log(this.document.documentElement.scrollTop);
    if (number > 750) {
      this.poz="fixed";
      this.topVal="105px"
      console.log("scroll 200 completed");
    } else {
      this.poz="absolute";
      this.topVal="855px";
      console.log("scroll unencountered");
    }
  }
  

}