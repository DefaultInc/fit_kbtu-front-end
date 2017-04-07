import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
    

import { FkNewsCardComponent } from '../components/fk-news-card/fk-news-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule.forRoot(),
  ],
  declarations: [
    MainPageComponent,
    FkNewsCardComponent
  ],
  exports: [FkNewsCardComponent]
})
export class MainPageModule { }