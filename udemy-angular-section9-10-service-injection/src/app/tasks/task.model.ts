import {InjectionToken, Provider} from '@angular/core';
export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

//for injection in other components
//define type
type TaskStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[];

//data
  export const TaskStatusOptions: TaskStatusOptions =[{
  value: 'open',
  taskStatus: 'OPEN',
  text: 'Open',
},
{
  value: 'in-progress',
  taskStatus: 'IN_PROGRESS',
  text: 'In_Progress',
},
{
  value: 'done',
  taskStatus: 'DONE',
  text: 'Completed',
}];

//for injection
export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>('task-status-options')


export const taskStatusOptionsProvider: Provider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions,
};

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
