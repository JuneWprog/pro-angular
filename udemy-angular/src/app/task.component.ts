import { Component, Input } from '@angular/core';
import {Task} from './tasks.component'; // import Task type

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  template: `
    <article>
        <h2>{{task?.title}}</h2>
        <p>{{task?.summary}}</p>
        <time>Due Date: {{task?.dueDate}}</time>
        
    </article>
  `,
})
export class TaskComponent {
    @Input({required:true}) task: Task | null = null; // required
}