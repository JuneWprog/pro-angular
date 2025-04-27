import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host:{
    '(click)': 'onLog()',
  }
})
export class LogDirective {
  private elementRef = inject(ElementRef); //ref to the element that is used to create the view

  onLog(){
    console.log('LogDirective: ', this.elementRef.nativeElement); //nativeElement is the element that is used to create the view

  }

}
