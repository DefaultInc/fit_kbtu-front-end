import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FkNewsCardComponent } from '../fk-news-card/fk-news-card.component';
import { FkPostCardComponent } from '../fk-post-card/fk-post-card.component';
import { FkNotFoundComponent } from '../fk-not-found/fk-not-found.component';
import { FkSidenavComponent } from './fk-sidenav.component'
import { PostFormComponent } from "../post-form/post-form.component";

const appRoutes: Routes = [
  {path: '', component: FkSidenavComponent, children: [
    { path: 'news/:id', component: FkPostCardComponent },
    { path: 'news', component: FkNewsCardComponent},
    { path: 'acm', component: FkNewsCardComponent, data: {tag: 3}},
    { path: 'about', component: FkNewsCardComponent, data: {tag: 2}},
    { path: 'discussions', component: FkNewsCardComponent, data: {tag: 1}},
    { path: 'robotics', component: FkNewsCardComponent, data: {tag: 4}},
    { path: 'olymp', component: FkNewsCardComponent, data: {tag: 5}},
    { path: 'hackathons', component: FkNewsCardComponent, data: {tag: 6}},
    { path: 'master-classes-workshops', component: FkNewsCardComponent, data: {tag: 7}},   
    { path: 'ThinkIT', component: FkNewsCardComponent, data: {tag: 8}},   
    { path: 'post-create', component: PostFormComponent},
    { path: '**', component: FkNotFoundComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SidenavRoutingModule {}