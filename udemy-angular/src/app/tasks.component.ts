import { Component, Input } from '@angular/core';
import {dummyTasks} from './dummy-tasks'; // import dummy tasks
import { TaskComponent } from './task.component'; // import TaskComponent

export type Task = {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string,
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  template: `
    <div id="tasks">
     <header>{{selectedUserName}}'s Tasks</header>
     <ul>
        @for(task of tasksForSelectedUser; track task.id) {
        
          <li>
          <app-task [task] ="task"/>
          </li>
        }

     </ul>
     
    </div>
  `,
})
export class TasksComponent {
    @Input({required:true}) selectedUserId: string | null = null; // required
    @Input({required:true}) selectedUserName: string | null = null; // required
    tasks: Task[] = dummyTasks; // use dummy tasks
    // selectedUserTasks: Task[] = this.tasks.filter((task: { userId: string | null; }) => task.userId === this.selectedUserId);
    get tasksForSelectedUser() {
        return this.tasks.filter((task: { userId: string | null; }) => task.userId === this.selectedUserId); // filter tasks for selected user
        
    }
}