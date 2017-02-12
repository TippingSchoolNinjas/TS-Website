import { Component } from '@angular/core';
declare var $ : any;
@Component({
    selector : 'dyntext',
    templateUrl : 'dyn-component.html',
    styleUrls : ['dyn-component.css']

})
export class DynTextComponent { 
       constructor(){   $(function(){
        $(".typed-text").typed({
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
      });
       }

}