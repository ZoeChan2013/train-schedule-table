import { TrainSchedule } from './train-schedule'

//the data structure is mapping to train-schedule.ts
export const TRAIN_SCHEDULE: TrainSchedule [] = [
    {
        origin: 'Newark Penn Station',
        destination: 'Trenton',
        scheduledAt: 1473527252361,
        delayedFor: 0,
        trackNum: 8,
        currentStatus: 'All Aboard'
    },
    {
        origin: 'NY Penn Station',
        destination: 'Washington DC',
        scheduledAt: 1473527252361,
        delayedFor: 0,
        trackNum: 8,
        currentStatus: 'On Time'
    },
    {
        origin: 'NY Penn Station',
        destination: 'King of Prussia',
        scheduledAt: 1473527252361,
        delayedFor: 0,
        trackNum: 8,
        currentStatus: ''
    },
    {
        origin: 'NY Penn Station',
        destination: 'Wilmington',
        scheduledAt: 1473527252361,
        delayedFor: 0,
        trackNum: 8,
        currentStatus: 'All Aboard'
    },
    {
        origin: 'NY Penn Station',
        destination: 'Baltimore',
        scheduledAt: 1473527252361,
        delayedFor: 0,
        trackNum: 8,
        currentStatus: 'All Aboard'
    }
];