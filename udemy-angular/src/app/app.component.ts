import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header.component';
import {TasksComponent} from './tasks.component';
import { UserComponent } from './user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo List';

  users = DUMMY_USERS;
  selectedUserId: string | null = null; // to store the selected user id
  onSelectUser(id:string){
    //this receives the selected user id from the child component
    this.selectedUserId = id; // set the selected user id
  }
  get selectedUserName() {
    const selectedUser = this.users.find(user => user.id === this.selectedUserId);
    return selectedUser ? selectedUser.name : null; // return the name of the selected user or null if not found
  }
}
