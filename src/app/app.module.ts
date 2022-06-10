import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingInfoComponent } from './sections/meeting-info/meeting-info.component';
import { HeaderComponent } from './sections/header/header.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingInfoComponent,
    HeaderComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
