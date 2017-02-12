import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';

import { MentorComponent } from './Mentor/mentor.component';
import { HomeComponent } from './home.component';
import { CourseComponent } from './course/course.component';

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
    }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);