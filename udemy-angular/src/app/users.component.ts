import { Component } from '@angular/core';
import { UserComponent } from './user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-users',
  imports: [UserComponent, CommonModule],
 
  template: `
   
      <ul id ="users">
        <li *ngFor="let user of users" style="list-style: none; margin: 10px;">
          <app-user
            [user]="user"
            (select)="onSelectUser($event)"
            [selectedUserId]="selectedUserId"
          >
          </app-user>
        </li>
      </ul>
  
  `
})
export class UsersComponent {
  users = DUMMY_USERS;
  selectedUserId: string | null = null; // to store the selected user id
  onSelectUser(id:string){
    //this receives the selected user id from the child component
    console.log('Selected user id:', id);
    this.selectedUserId = id; // set the selected user id
  }
  
  

 
}
