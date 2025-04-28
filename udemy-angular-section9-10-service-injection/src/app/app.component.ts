import { Component } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { CounterComponent } from './counter/counter.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TasksComponent,CounterComponent, MessagesComponent],
})
export class AppComponent {
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }

}
