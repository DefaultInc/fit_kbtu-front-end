import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MainPageModule } from './main-page/main-page.module';
import { SidenavRoutingModule } from './components/fk-sidenav/fk-sidenav.routing';

import { AppComponent } from './app.component';
import { FkNavbarComponent } from './components/fk-navbar/fk-navbar.component';
import { FkSidenavComponent } from './components/fk-sidenav/fk-sidenav.component';
import { FkNotFoundComponent } from './components/fk-not-found/fk-not-found.component';
import { FkLoginComponent } from './components/fk-auth/fk-auth.component';
import { FkPostCardComponent } from './components/fk-post-card/fk-post-card.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

import { PostService } from './services/post.service';
import { AuthenticationService } from './services/authentication.service';
import { SharedService } from './services/shared.service';
import { CommentService } from "./services/comment.service";
import { SelectorDirective } from "./test/selector.directive";

@NgModule({
  declarations: [
    AppComponent,
    FkNavbarComponent,
    FkSidenavComponent,
    FkLoginComponent,
    FkNotFoundComponent,
    FkPostCardComponent,
    CommentComponent,
    CommentFormComponent,
    SelectorDirective    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule.forRoot(),
    HttpModule,
    AppRoutingModule,
    MainPageModule,
    ReactiveFormsModule,
    SidenavRoutingModule
  ],
  entryComponents: [FkLoginComponent],
  providers: [PostService, AuthenticationService, SharedService, CommentService],

  bootstrap: [AppComponent]
})
export class AppModule { }