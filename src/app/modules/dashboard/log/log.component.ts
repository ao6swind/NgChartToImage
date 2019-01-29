import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  logs: Array<{ image: string, datetime: string }>;

  constructor(private data: DataService) {
    this.logs = this.data.logs;
  } 

  ngOnInit() {
  }

}
