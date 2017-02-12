import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector:   'about-discover',
    templateUrl:'./about.component.html',
    styleUrls:  ['./about.component.css'],

})

export class AboutComponent{
    
constructor(){}
    @ViewChild('modal')
    modal: ModalComponent;
    backdropOptions = [true, false, 'static'];
    cssClass: string = '';

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    css: boolean = false;
    
    open() {
        this.modal.open();
        
    }

}
