
import { Directive } from '@angular/core';
@Directive({
    selector: 'a[appSafeLink]', //when should be active /used <a appSafeLink></a>
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)',
    },
})
export class SafeLinkDirective {
    constructor() {
        // This directive is empty, but you can add functionality here if needed.
    }
    
    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('Do you want to leave the app?');
        if (wantsToLeave) {
return;        } 
        // Prevent the default action of the link if the user does not want to leave
        event.preventDefault();
    }
}