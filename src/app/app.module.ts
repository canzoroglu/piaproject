import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './Components/about/about.component';
import { RandevualComponent } from './Components/randevual/randevual.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginformComponent } from './Components/loginform/loginform.component';
import { RandevularComponent } from './Components/randevular/randevular.component';
import { RandevularimComponent } from './Components/randevularim/randevularim.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { RandevudetailsComponent } from './Components/randevudetails/randevudetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    RandevualComponent,
    HomeComponent,
    LoginformComponent,
    RandevularComponent,
    RandevularimComponent,
    CalendarComponent,
    RandevudetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule, MatDialogModule],
  providers: [
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
