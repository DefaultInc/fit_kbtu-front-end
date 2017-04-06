import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FkNewsCardComponent } from './components/fk-news-card/fk-news-card.component';
import { FkSidenavComponent } from './components/fk-sidenav/fk-sidenav.component';
import { FkPostCardComponent } from './components/fk-post-card/fk-post-card.component';
import { FkNotFoundComponent } from './components/fk-not-found/fk-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { } from './main-page/';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}