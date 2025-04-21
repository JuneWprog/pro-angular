import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksModule } from './tasks/tasks.module';
import { SharedModule } from './shared/shared.module';

/**
 *  declarations: are the non-standalone components, directives, and pipes that belong to this module.
 * imports the BrowserModule and the standalone components that are used in the app.
 */
@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent ],
  bootstrap:[AppComponent], // bootstrap the root component of the application
  imports: [BrowserModule, FormsModule, SharedModule, TasksModule], 
})
export class AppModule {}