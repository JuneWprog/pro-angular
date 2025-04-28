import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import {  TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers:[taskStatusOptionsProvider]
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  private tasksService = inject(TasksService);
  //inject an object not service
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);

  // tasks = [];
  // tasks = this.tasksService.getTasks();  //get all tasks

  tasks = computed(() => {
    const tasks = this.tasksService.allTasks();
    switch (this.selectedFilter() ) {
      case 'all':
        return tasks;
      case 'open':
        return this.tasksService.allTasks().filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService.allTasks().filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService.allTasks().filter((task) => task.status === 'DONE');
      default:
        return tasks;
    }});

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
