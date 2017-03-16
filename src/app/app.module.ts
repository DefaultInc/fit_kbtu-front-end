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

import { FkLoginComponent, FkSignupComponent } from './components/fk-auth/fk-auth.component';
import { PostService } from './services/post.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    FkNavbarComponent,
    FkSidenavComponent,
    FkNewsCardComponent,
    FkLoginComponent,
    FkSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule.forRoot(),
    HttpModule
  ],
  entryComponents: [FkLoginComponent, FkSignupComponent],
  providers: [PostService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
