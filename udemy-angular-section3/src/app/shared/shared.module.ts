
import {NgModule} from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent], // export the CardComponent so it can be used in other modules
})
export class SharedModule { } // SharedModule is a module that contains shared components, directives, and pipes that can be used across the application. It is imported into other modules to provide access to these shared features.