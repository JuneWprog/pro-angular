import { NgModule } from '@angular/core';

@NgModule({
    declarations: [NewTaskComponent, TaskComponent, TasksComponent], // declare the components, directives, and pipes that belong to this module   
    exports: [TasksComponent],   
    })
export class TasksModule { } 
