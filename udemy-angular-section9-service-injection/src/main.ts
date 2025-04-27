import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';

// if using element injector
//import { TasksService } from './app/tasks/tasks.service';
// bootstrapApplication(AppComponent, {
//   providers: [TasksService]
// })
//   .catch((err) => console.error(err));


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
