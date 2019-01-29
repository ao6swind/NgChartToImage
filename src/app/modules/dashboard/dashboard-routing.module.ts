import { DashboardComponent } from './dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { LogComponent } from './log/log.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'log',
        component: LogComponent,
      },
      {
        path: '',
        component: ChartComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
