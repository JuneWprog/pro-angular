import { Component, Input, inject} from '@angular/core';
import { dummyTasks } from '../data/dummy-tasks'; 
import { TaskComponent } from './task.component'; 
import { type Task, type NewTask } from '../model/task.model'; 
import { NewTaskComponent } from './new-task.component'; 
import {TaskService} from './tasks.service'; 
//move the logic to the service
//dependency injection: TaskService is injected into the component constructor, allowing the component to use the service's methods to manage tasks.
// 
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string ;
  @Input({ required: true }) selectedUserName: string | null = null; 
  isAddTaskVisible: boolean = false; // flag to show/hide new task form


  //inject the service in the constructor or use inject() function:
  constructor(private taskService: TaskService) {} // inject TaskService
  // private taskService = inject(TaskService); // inject TaskService using inject() function
  
 
  get tasksForSelectedUser() {
   
    return this.taskService.getUserTasks(this.selectedUserId ?? ''); // use TaskService to get tasks for selected user

  }
  
  onTaskComplete(id: string) {
   
    this.taskService.deleteTask(id); // use TaskService to delete the task
  }

  openAddTask(){
    this.isAddTaskVisible = true; // show the new task form
  }

  onAddTaskCancel() {
    this.isAddTaskVisible = false; // hide the new task form
  }
  onAddTaskSubmit(newTask: NewTask, selectedUserId: string) {
    this.isAddTaskVisible = false; // hide the new task form
   
    this.taskService.addTask(newTask, selectedUserId); // use TaskService to add the new task
  }



  // do not use task service
   //tasks: Task[] = dummyTasks; 
 
  //  get tasksForSelectedUser() {
  //   return this.tasks.filter(
  //     (task: { userId: string | null }) => task.userId === this.selectedUserId
  //   ); // filter tasks for selected user
  // }
  // // child component event handler, task id is passed to the parent component
  // onTaskComplete(id: string) {
  //   this.tasks = this.tasks.filter((task) => task.id !== id); // remove the task from the list
   
  // }

  // openAddTask(){
  //   this.isAddTaskVisible = true; // show the new task form
  // }

  // onAddTaskCancel() {
  //   this.isAddTaskVisible = false; // hide the new task form
  // }
  // onAddTaskSubmit(newTask: NewTask, selectedUserId: string) {
  //   this.isAddTaskVisible = false; // hide the new task form
  //   this.tasks.push({
  //     id: new Date().getTime().toString(), // generate a new id for the task
  //     userId: this.selectedUserId ?? 'unknown', // assign the user id to the task, fallback to 'unknown' if null
  //    ...newTask,
  //   }); // add the new task to the list
  
  // }
}
