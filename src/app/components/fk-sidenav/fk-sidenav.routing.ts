import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FkNewsCardComponent } from '../fk-news-card/fk-news-card.component';
import { FkPostCardComponent } from '../fk-post-card/fk-post-card.component';
import { FkNotFoundComponent } from '../fk-not-found/fk-not-found.component';
import { FkSidenavComponent } from './fk-sidenav.component'

const appRoutes: Routes = [
  {path: '', component: FkSidenavComponent, children: [
    { path: 'news/:id', component: FkPostCardComponent },
    { path: 'news', component: FkNewsCardComponent},
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