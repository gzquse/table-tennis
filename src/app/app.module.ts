import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingInfoComponent } from './sections/meeting-info/meeting-info.component';
import { HeaderComponent } from './sections/header/header.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoreComponent } from './sections/more/more.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingInfoComponent,
    HeaderComponent,
    ContactUsComponent,
    AboutUsComponent,
    MoreComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
