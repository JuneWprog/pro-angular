import { dummyTasks } from "../data/dummy-tasks";
import {type Task, type NewTask} from "../model/task.model"
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks: Task[]; 
    //local storage
    constructor(){
        const tasks = localStorage.getItem('tasks'); // get tasks from local storage
        if (tasks) {
            this.tasks = JSON.parse(tasks); // parse tasks from JSON string to object
        } else {
            this.tasks = dummyTasks; // use dummy tasks if no tasks in local storage
        }
    }
    // private tasks = dummyTasks;

  getUserTasks(userId:string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(newTask: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(), 
      userId: userId,
     ...newTask,
    }); 
    this.saveTasks(); 
  }

  deleteTask(id:string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks(); 
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // save tasks to local storage
  }
}