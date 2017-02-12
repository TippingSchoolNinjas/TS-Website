import { Component, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
// import { NavBarComponent } from './NavHead/navbar.component';
declare var $ : any;
@Component({
    selector : 'all',
    templateUrl : 'all.component.html',
    styleUrls : ['all.component.css']

})
export class AllComponent{ 
    @ViewChild('modal')
    modal: ModalComponent;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;

    index: number = 0;
    backdropOptions = [true, false, 'static'];
    cssClass: string = '';

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    css: boolean = false;

       option1 : string;
       option2 : string;
       navbutton1 :string;
       navbutton2 :string;
       constructor(){   
       console.log('outside query')
    this.option1 = "Programming";
    this.option2 = "Machine Learning";
    this.navbutton1 = "Nav 1";
    this.navbutton2 = "Nav 2";

       }
       ngAfterViewInit(){
    console.log('Home Constructor')
    $(function(){
        
        $(".typed-text").typed(
          // console.log('Inside JQuery'),
          {
          strings: [
            "technology partners",
            "product architects",
            "Machine Learning<br>experts",
            "agile team",
            "Python gurus",
            "mad scientists",
            "engineering team"
          ],
          loop: true,
          cursorChar: "|",
          typeSpeed: 30,
          backSpeed: 15,
          backDelay: 2000
        });
        console.log('Inside query')
       }); 
  }
     
    open() {
        this.modal.open();      
       }

}
