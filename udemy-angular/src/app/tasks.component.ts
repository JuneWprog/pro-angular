import { Component, Input } from '@angular/core';
import {dummyTasks} from './dummy-tasks'; // import dummy tasks

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  template: `
    <div>
     <h3>Tasks</h3>
     <p>{{selectedUserName}}</p>
     <p>{{tasksForSelectedUser.length}}</p>
    </div>
  `,
})
export class TasksComponent {
    @Input({required:true}) selectedUserId: string | null = null; // required
    @Input({required:true}) selectedUserName: string | null = null; // required
    tasks = dummyTasks; // use dummy tasks
    selectedUserTasks: any[] = []; // to store tasks for selected user
    get tasksForSelectedUser() {
        this.selectedUserTasks = this.tasks.filter((task: { userId: string | null; }) => task.userId === this.selectedUserId); // filter tasks for selected user
        return this.selectedUserTasks; // return tasks for selected user
    }
}