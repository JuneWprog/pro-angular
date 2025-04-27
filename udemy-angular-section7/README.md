# what is Directive:
A special Angular decorator that marks a class as a Directive (a piece of logic you attach to an element).

ElementRef — A wrapper around a real DOM element

inject — A function to inject dependencies manually (new style in Angular, especially for standalone directives).

selector: 'a[appSafeLink]'
👉 This directive will apply only to <a> tags that have appSafeLink attribute.

host: { '(click)': 'onConfirmLeavePage($event)' }
👉 Binds the click event on the host element (the <a> tag) to call onConfirmLeavePage() when clicked.

input() — Creates an input binding (a way to pass values from HTML into this directive).

'myapp' — Default value if no input is provided.

{ alias: 'appSafeLink' } — Tell Angular: when someone writes appSafeLink="value", bind that value to queryParam.

```ts
<a href="https://angular.dev" appSafeLink="hello">Angular Docs</a>

```
host means: “What should happen between the directive and the HTML element it is attached to?”
When you attach this directive to a DOM element, bind some DOM events/properties to methods or values from the directive class.”

Pipes:
trasnform the way data is displayed
Built-in Pipes:
uppercase/lowercase pipe
Data Pipe
Currency pipe
Decimal pipe
Percent Pipe
async pipe
jsonpipe
