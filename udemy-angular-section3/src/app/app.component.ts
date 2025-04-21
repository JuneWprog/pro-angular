import { Component } from '@angular/core';

import { DUMMY_USERS } from './data/dummy-users';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo List';

  users = DUMMY_USERS;
  selectedUserId: string  = this.users[0].id; // to store the selected user id
  onSelectUser(id:string){
    //this receives the selected user id from the child component
    this.selectedUserId = id; // set the selected user id
  }
  get selectedUserName() {
    const selectedUser = this.users.find(user => user.id === this.selectedUserId);
    return selectedUser ? selectedUser.name : null; // return the name of the selected user or null if not found
  }
}
