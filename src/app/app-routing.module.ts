import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FkNewsCardComponent } from './components/fk-news-card/fk-news-card.component';
import { FkPostCardComponent } from './components/fk-post-card/fk-post-card.component';
import { FkNotFoundComponent } from './components/fk-not-found/fk-not-found.component';

const appRoutes: Routes = [
  { path: 'news/:id', component: FkPostCardComponent },
  { path: 'news', component: FkNewsCardComponent },
  { path: '', component: FkNewsCardComponent, pathMatch: 'full' },
  { path: '**', component: FkNotFoundComponent },
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