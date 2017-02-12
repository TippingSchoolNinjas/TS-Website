import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AnkitappComponent } from './Ankitapp.component';
import {lnavComponent} from './lnav.component'; 
    import {imcontentComponent} from './imcontent.component';
    import {infogridComponent} from './infogrid.component'; 
    import {overviewComponent} from './overview.component'; 
    import {fnavComponent} from './fnav.component'; 
    import {cirriculumComponent} from './cirriculum.component'; 
    import {bluepartComponent} from './bluepart.component';
    import { Parallax,
         ParallaxConfig } from './parallax.directive';
    import { Ng2CollapseModule } from 'ng2-collapse';
    import { AdvisorsComponent } from './Advisors.component';

@NgModule({

  declarations: [
    AnkitappComponent, 
    lnavComponent, 
    imcontentComponent, 
    infogridComponent, 
    overviewComponent, 
    fnavComponent, 
    cirriculumComponent, 
    bluepartComponent,
    Parallax,
    AdvisorsComponent
   ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  providers: [],
  bootstrap: [AnkitappComponent]
})
export class AppModule { }
