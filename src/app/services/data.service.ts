import { Department } from './../models/department';
import { Building } from './../models/building';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Log } from '../models/log';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // 匯出圖表的紀錄
  logs: Array<{ image: string, datetime: string }> = new Array<{ image: string, datetime: string }>();

  constructor(private http: HttpClient) { 

  }

  public getBuildings(){
    return this.http.get<Array<Building>>('assets/data/building.json');
  }

  public getDepartments(building_id: any){
    return this.http.get<Array<Department>>('assets/data/department.json')
      .pipe(map(departments => departments.filter((department) => department.building_id == building_id)));
  }

  public getLogs(department_id){
    return this.http.get<Array<Log>>('assets/data/log.json')
      .pipe(map(logs => logs.filter((log) => log.department_id == department_id)));
  }
}
