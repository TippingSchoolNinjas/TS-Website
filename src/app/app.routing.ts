import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';

import { MentorComponent } from './Mentor/mentor.component';
import { HomeComponent } from './home.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contact-us/contactus.component';
import { AnkitappComponent } from './Ankitapp/Ankitapp.component';

const appRoutes : Routes = [
    {
        path : '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component : HomeComponent 
    },
    {
        path : 'mentor',
        component : MentorComponent
    },
    {
        path : 'courses',
        component : CourseComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
    {
        path : 'contactus',
        component : ContactusComponent
    },
    {
        path : 'tsbc',
        component : AnkitappComponent
    }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);