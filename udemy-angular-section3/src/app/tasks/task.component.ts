import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import {type Task} from '../model/task.model'; 
import { DatePipe } from '@angular/common';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  template: `
  <app-card>
    <article>
        <h2>{{task.title}}</h2>
        <time>Due Date: {{task.dueDate | date: "fullDate"}}</time>
        <p>{{task.summary}}</p>
        <p class="actions" (click)='completeTask()'><button>Complete</button> </p>
    </article>
</app-card>
  `,
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
    @Input({required:true}) task!: Task; // required
    // @Output() complete = new EventEmitter<string>(); // output event emitter of task id
    taskService = inject(TaskService)
    completeTask() {
        this.taskService.deleteTask(this.task.id); // use TaskService to delete the task
    }
  //   completeTask() {
  //     this.complete.emit(this.task?.id); 
  // }
}