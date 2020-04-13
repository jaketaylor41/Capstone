import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RequirementsComponent } from './requirements/requirements.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { IssuesComponent } from './issues/issues.component';
import { NavBarTwoComponent } from './nav-bar-two/nav-bar-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    RequirementsComponent,
    TechnologiesComponent,
    IssuesComponent,
    NavBarTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
