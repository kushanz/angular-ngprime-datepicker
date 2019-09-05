import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MydateComponent } from './mydate/mydate.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,CalendarModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, MydateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
