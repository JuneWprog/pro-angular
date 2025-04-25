

import { Directive, input, inject, effect, TemplateRef, ViewContainerRef } from '@angular/core';
import {Permission} from './auth.model';
import { AuthService } from './auth.service';

@Directive({
    selector: '[appAuth]',  
    standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});  //use this directive like this <div appAuth="admin"></div>  input is "admin"
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); //ref to the template that is used to create the view
  // TemplateRef is used to create a view from the template
  private viewContainer = inject(ViewContainerRef); // ViewContainerRef is used to manipulate the DOM 
  
  constructor() {
      effect(() => {
        if (this.authService.activePermission() === this.userType()) {
         this.viewContainer.createEmbeddedView(this.templateRef); //create a view from the template
        } else {
          console.log('Do not show this template');
          this.viewContainer.clear(); //clear the view if the user does not have the permission
        }
      });
        
    }
}
