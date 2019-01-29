import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './../../pipes/safe-html.pipe';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { LogComponent } from './log/log.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [DashboardComponent, ChartComponent, LogComponent, SafeHtmlPipe],
  bootstrap:[DashboardComponent]
})
export class DashboardModule { }
