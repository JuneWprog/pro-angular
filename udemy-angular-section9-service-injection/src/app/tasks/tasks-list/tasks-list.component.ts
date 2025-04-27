import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  private tasksService = inject(TasksService);

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
