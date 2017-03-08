import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { FkNavbarComponent } from './components/fk-navbar/fk-navbar.component';
import { FkSidenavComponent } from './components/fk-sidenav/fk-sidenav.component';
import { FkNewsCardComponent } from './components/fk-news-card/fk-news-card.component';

import { PostService } from './components/fk-news-card/post.service';

@NgModule({
  declarations: [
    AppComponent,
    FkNavbarComponent,
    FkSidenavComponent,
    FkNewsCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule.forRoot(),
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
