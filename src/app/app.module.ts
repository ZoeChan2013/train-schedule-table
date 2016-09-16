import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrainScheduleComponent } from './train-schedule/train-schedule.component';
import { TrainScheduleTableComponent } from './train-schedule-table/train-schedule-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainScheduleComponent,
    TrainScheduleTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
