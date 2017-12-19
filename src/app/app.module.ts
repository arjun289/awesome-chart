import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// imports to use highcharts
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { ChartComponent } from './chart/chart.component';

export function highchartsfactory() {
  const hc = require('highcharts');
  const sg = require('highcharts/modules/solid-gauge');
  sg(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [
    {
     provide: HighchartsStatic,
     useFactory: highchartsfactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
