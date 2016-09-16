import { Injectable } from '@angular/core';
import { TRAIN_SCHEDULES } from './mock-train-schedules'

@Injectable()
export class TrainScheduleService {

  constructor() { }

  getTrainSchedule() {
    return TRAIN_SCHEDULES;
  }

}
