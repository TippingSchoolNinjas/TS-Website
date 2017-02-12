import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { JumbotronComponent } from './Jumbotron/jumbotron.component';
import { NavBarComponent } from './NavHead/navbar.component';
// import { DynTextComponent } from './Dynamic-Text/dyn-component';
// import { ButtonComponent } from './Button/button.component';
import { HttpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
// import { PopUpComponent } from './PopUp/popup.component';
import { Ng2TabComponent } from './tabs/ng2-tab.component';
import { Ng22Component } from './Ng22.component';
import { AllComponent } from './all';
import { AlertModule } from 'ng2-bootstrap';
import { NgbdCarouselBasic } from './Courosel-anuj/carousel-basic';
import { CouroselanComponent } from './Courosel-anuj/courosel-an.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MentorComponent } from './Mentor/mentor.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    HomeComponent,
    NavBarComponent,
    // DynTextComponent,
    // ButtonComponent,
    // PopUpComponent,
    Ng2TabComponent,
    Ng22Component,
    NgbdCarouselBasic,
    CouroselanComponent,
    MentorComponent,
    FooterComponent,
    CourseComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    Ng2Bs3ModalModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
