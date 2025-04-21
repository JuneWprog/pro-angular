import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {type Task, type NewTask} from "../model/task.model";

import {TaskService} from './tasks.service'; // import TaskService to manage tasks


@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {


@Input() selectedUserId!: string; // input property to get selected user ID
// @Output() addTask = new EventEmitter<NewTask>(); // output event emitter of task object
@Output() cancelTask = new EventEmitter<void>(); // output event emitter of void type


newTask: NewTask = { 
    title: '',
    summary: '',
    dueDate: '', 
  };


//   constructor(private taskService: TaskService) {} // inject TaskService
  taskSerive = inject(TaskService); // inject TaskService using inject() function


onSubmit() {
    // this.addTask.emit(this.newTask); // emit the task object to parent component
    this.taskSerive.addTask(this.newTask, this.selectedUserId); // use TaskService to add the new task
    this.onCancel(); // close the form after adding the task
}
onCancel(){
    this.cancelTask.emit(); // emit the cancel event to parent component

}

}