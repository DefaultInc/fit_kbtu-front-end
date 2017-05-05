import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TimeAgoPipe } from 'time-ago-pipe';
import { NguiInfiniteListModule } from '@ngui/infinite-list';
import { ImageUploadModule } from 'ng2-imageupload';

import { FkNewsCardComponent } from '../components/fk-news-card/fk-news-card.component';
import { PostFormComponent } from "../components/post-form/post-form.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    NguiInfiniteListModule,
    ImageUploadModule
  ],
  declarations: [
    MainPageComponent,
    FkNewsCardComponent,
    TimeAgoPipe
  ],
  exports: [FkNewsCardComponent, TimeAgoPipe, ImageUploadModule]
})
export class MainPageModule { }