import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TimeAgoPipe } from 'time-ago-pipe';
import { NguiInfiniteListModule } from '@ngui/infinite-list';
    

import { FkNewsCardComponent } from '../components/fk-news-card/fk-news-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    NguiInfiniteListModule
  ],
  declarations: [
    MainPageComponent,
    FkNewsCardComponent,
    TimeAgoPipe
  ],
  exports: [FkNewsCardComponent, TimeAgoPipe]
})
export class MainPageModule { }