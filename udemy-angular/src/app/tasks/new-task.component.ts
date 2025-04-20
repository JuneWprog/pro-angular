import { Component, EventEmitter, Output } from '@angular/core';
import {type Task} from "../model/task.model";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {

task : Task={
    id: '',
    userId: '',
    title: '',
    summary: '',
    dueDate: '',
}
@Output() addTask = new EventEmitter<Task>(); // output event emitter of task object
@Output() cancelTask = new EventEmitter<void>(); // output event emitter of void type
onSubmit() {
    this.addTask.emit(this.task); // emit the task object to parent component
}
onCancel(){
    this.cancelTask.emit(); // emit the cancel event to parent component

}

}