import { Injectable } from '@angular/core';
import { TRAIN_SCHEDULE } from './mock-train-schedule'

@Injectable()
export class TrainScheduleService {

  constructor() { }

  getTrainSchedule() {
    return TRAIN_SCHEDULE;
  }

}
