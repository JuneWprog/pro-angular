import { Component } from '@angular/core';
import { TodoList } from "./todoList";
import { TodoItem } from "./todo";
import {MaterialModule} from './material.module'; // Import MaterialModule
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [MaterialModule, FormsModule], // Use MaterialModule here

})
export class AppComponent {
    private list = new TodoList("Jun", [
        new TodoItem("Go for run", true),
        new TodoItem("Learn Angular"),
        new TodoItem("Create a new app"),
        new TodoItem("Go to the gym"),
    ]);
    
    get username(): string {
        return this.list.username;
    }

    get itemCount(): number {
        return this.list.items.filter(item => !item.completed).length;
    }

    get items(): readonly TodoItem[] {
        
        return this.list.items.filter(item => this.showComplete || !item.completed);
    }

    addItem(newItem: string) {
        if (newItem != "") {
            this.list.addItem(newItem);
        }
    }

    deleteItem(item: TodoItem) {
        this.list.deleteItem(item);
    }

    showComplete: boolean = true;
}