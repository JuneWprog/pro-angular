import { Component, EventEmitter, Input, Output } from '@angular/core';

import {type Task} from '../model/task.model'; // import Task type

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  template: `
    <article>
        <h2>{{task?.title}}</h2>
        <time>Due Date: {{task?.dueDate}}</time>
        <p>{{task?.summary}}</p>
        <p class="actions" (click)='completeTask()'><button>Complete</button> </p>
    </article>
  `,
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
    @Input({required:true}) task: Task | null = null; // required
    @Output() complete = new EventEmitter<string>(); // output event emitter of task id
    completeTask() {
        //send task id to parent component
        this.complete.emit(this.task?.id); 
    }
}