import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-schedule',
  templateUrl: './train-schedule.component.html',
  styleUrls: ['./train-schedule.component.less'],
  inputs: ['schedule']
})
export class TrainScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
