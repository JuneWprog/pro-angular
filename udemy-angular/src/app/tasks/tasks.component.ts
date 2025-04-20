import { Component, Input } from '@angular/core';
import { dummyTasks } from '../data/dummy-tasks'; // import dummy tasks
import { TaskComponent } from './task.component'; // import TaskComponent
import { type Task } from '../model/task.model'; // import Task type
import { NewTaskComponent } from './new-task.component'; // import NewTaskComponent

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId: string | null = null; // required
  @Input({ required: true }) selectedUserName: string | null = null; // required
  tasks: Task[] = dummyTasks; // use dummy tasks
  // selectedUserTasks: Task[] = this.tasks.filter((task: { userId: string | null; }) => task.userId === this.selectedUserId);
  isAddTaskVisible: boolean = false; // flag to show/hide new task form
 
  get tasksForSelectedUser() {
    return this.tasks.filter(
      (task: { userId: string | null }) => task.userId === this.selectedUserId
    ); // filter tasks for selected user

  }
  // child component event handler, task id is passed to the parent component
  onTaskComplete(id: string) {
    // logic to remove the task
    this.tasks = this.tasks.filter((task) => task.id !== id); // remove the task from the list
    console.log('Task removed:', id);
  }

  openAddTask(){
    this.isAddTaskVisible = true; // show the new task form
  }

  onAddTaskCancel() {
    this.isAddTaskVisible = false; // hide the new task form
  }
  onAddTaskSubmit(task: Task) {
    
    this.tasks.push({
      id: new Date().getTime().toString(), // generate a new id for the task
      userId: this.selectedUserId ?? 'unknown', // assign the user id to the task, fallback to 'unknown' if null
      title:  task.title,
      summary: task.summary,
      dueDate: task.dueDate,

    }); // add the new task to the list
    console.log('Task added:',this.tasks); // log the added task
    this.isAddTaskVisible = false; // hide the new task form
  }
}
