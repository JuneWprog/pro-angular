import { dummyTasks } from "../data/dummy-tasks";
import {type Task, type NewTask} from "../model/task.model"
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks = dummyTasks;

  getUserTasks(userId:string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(newTask: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(), 
      userId: userId,
     ...newTask,
    }); 
  }

  deleteTask(id:string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}