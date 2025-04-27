import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';
// 4 ways to inject a service in angular
// 1. using constructor injection (recommended) - this is the most common way to inject a service in Angular
// 2. using inject function - this is a new way to inject a service in Angular, introduced in Angular 14. It is a more functional way to inject a service and can be used in standalone components and other places where constructor injection is not possible.
// 3. using element injector - this is a new way to inject a service in Angular, introduced in Angular 14. It is a more functional way to inject a service and can be used in standalone components and other places where constructor injection is not possible.
// 4. using root injector - this is a new way to inject a service in Angular, introduced in Angular 14. It is a more functional way to inject a service and can be used in standalone components and other places where constructor injection is not possible.

//config in main.ts for providers
//using Injectable decorator to provide the service in the root injector
//using Element injector to provide the service in the element injector using providers array in the component decorator providers: [TasksService]

// @Injectable({
//     providedIn: 'root'
// })
export class TasksService {
  private loggingService = inject(LoggingService);

  tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTask) => [...oldTask, newTask]);
    this.loggingService.log(`Task added: ${newTask.title}`);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    this.loggingService.log(`Task updated: ${taskId} - ${newStatus}`);
  }
}
