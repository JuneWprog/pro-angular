import { TodoItem } from './todo';
export class TodoList {
    constructor(public username:string , private todoItems: TodoItem[] = []) {

    }
    get items():readonly TodoItem[] {
        return this.todoItems;
    }
    addItem(task: string) {
        this.todoItems.push(new TodoItem(task));
    }
    deleteItem(item: TodoItem) {
        this.todoItems = this.todoItems.filter(todoItem => todoItem !== item);
    }
}
