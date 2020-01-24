import { Moment } from 'moment';

export interface ITask {
  id?: number;
  name?: string;
  description?: string;
  dueDate?: Moment;
}

export class Task implements ITask {
  constructor(public id?: number, public name?: string, public description?: string, public dueDate?: Moment) {}
}
