import { Building } from './../../../models/building';
import { Department } from './../../../models/department';
import { Log } from './../../../models/log';

import { DataService } from './../../../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  building_id: any = null;
  department_id: any = null;
  
  // 遠端撈回來的資料(用json模擬)
  buildings: Array<Building>;
  departments: Array<Department>;
  logs: Array<Log>;
  
  // 統計圖表用的參數與資料
  type:string = 'bar';
  legend:boolean = true;
  lables: Array<string> = new Array<string>();
  statistics: Array<{label: string, data: number[]}> = new Array<{label: string, data: number[]}>();
  
  subscription_building: Subscription;
  subscription_department: Subscription;
  subscription_log: Subscription;

  constructor(private data: DataService) { 
    
  }

  ngOnInit() {
    this.subscription_building = this.data.getBuildings().subscribe(data => {
      this.buildings = data;
    });
    this.subscription_department = this.data.getDepartments(this.building_id).subscribe(data => {
      this.departments = data;
    });
    this.subscription_log = this.data.getLogs(this.department_id).subscribe(data => {
      this.logs = data;
    });
  }
  
  ngOnDestroy(){
    this.subscription_log.unsubscribe();
    this.subscription_department.unsubscribe();
    this.subscription_building.unsubscribe();
  }

  setDepartments(event: Event){
    this.statistics = [];
    this.building_id = (<HTMLSelectElement>event.target).value;
    this.subscription_department = this.data.getDepartments(this.building_id).subscribe(data => {
      this.departments = data;
    });
  }
  
  getLogs(event: Event){
    this.statistics = [];
    this.department_id = (<HTMLSelectElement>event.target).value;
    this.subscription_log = this.data.getLogs(this.department_id).subscribe(data => {
      this.logs = data;
      // 轉成次數統計
      this.logs.forEach((log, i) => {
        if(!this.statistics.some(row => row.label == log.date)){
          this.lables.push(log.date);
          this.statistics.push({ label: log.date, data: [1] });
        }
        else{
          this.statistics.find(row => row.label == log.date).data[0]++;
        }
      });
      // 把label(date)由小排到大
      this.statistics = this.statistics.sort((a, b) => { 
        if(a.label < b.label)
          return -1;
        else if(a.label > b.label)
          return 1;
        else
          return 0;
      });
    });
  }

  export(){
    let canvas = document.getElementsByTagName("canvas");
    let link = document.createElement("a");
    let image = canvas[0].toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.setAttribute("href", image);
    link.setAttribute("download","export.png");
    document.body.append(link);
    link.click();
    document.body.removeChild(link);
    this.data.logs.push({
      datetime: new Date().toLocaleString(),
      image: image
    });
  }
}
