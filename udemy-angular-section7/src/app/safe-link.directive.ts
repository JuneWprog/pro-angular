
import { Directive, ElementRef, inject, input } from '@angular/core';
@Directive({
    selector: 'a[appSafeLink]', //when should be active /used <a appSafeLink></a>
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)',
    },
})
export class SafeLinkDirective {
    constructor() {
        console.log('SafeLinkDirective constructor');}
    queryParam = input('myapp',{alias:'appSafeLink'});
    private hostElementRef = inject<ElementRef <HTMLAnchorElement>>(ElementRef); //ref to the element that is used to create the view
    
    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('Do you want to leave the app?');
        if (wantsToLeave) {
            const address = this.hostElementRef.nativeElement.getAttribute('href'); //get the href attribute of the element that is used to create the view
            this.hostElementRef.nativeElement.setAttribute('href', address+'?from=' +this.queryParam()); //set the href attribute of the element that is used to create the view
            return; //leave the app
        } 
        // Prevent the default action of the link if the user does not want to leave
        event.preventDefault();
    }
}