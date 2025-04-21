
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
    <header>
     <h1>My Task Manager</h1>
     <img src ="/assets/task-management-logo.png" alt="Task Management Logo" width="100" height="100">
    </header>
   
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {}