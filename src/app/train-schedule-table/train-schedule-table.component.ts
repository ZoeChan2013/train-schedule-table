import { Component, OnInit } from '@angular/core';
import { TrainScheduleComponent } from '../train-schedule/train-schedule.component';
import  { TrainScheduleService } from './train-schedule.service';

@Component({
  selector: 'app-train-schedule-table',
  templateUrl: './train-schedule-table.component.html',
  styleUrls: ['./train-schedule-table.component.less'],
  entryComponents: [TrainScheduleComponent],
  providers: [TrainScheduleService]
})
export class TrainScheduleTableComponent implements OnInit {
  currentTime;
  trainSchedules;

  constructor(private _trainScheduleService: TrainScheduleService) { }

  ngOnInit() {
    this.currentTime = new Date().getTime();
    this.trainSchedules = this._trainScheduleService.getTrainSchedule();
  }

}
