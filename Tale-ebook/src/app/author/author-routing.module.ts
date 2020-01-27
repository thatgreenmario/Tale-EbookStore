import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorHomeComponent } from './author-home/author-home.component';
import { AuthorEditProfileComponent } from './author-edit-profile/author-edit-profile.component';

const authorRoutes: Routes = [
    {
        path: 'author',
        component: AuthorComponent,
        children: [
            {
                path: 'home',
                component: AuthorHomeComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'EditAuthorProfile',
                component: AuthorEditProfileComponent
            }
            
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(authorRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AuthorRoutingModule{ }