# Services

## What is service?
Services allow you to share data or functions across the application

Dependency Injection means:

Instead of a class creating its own dependencies (objects it needs), someone else gives them (injects them) into the class.

🧠 Why use Dependency Injection?
✅ To make code easier to manage
✅ To make code more testable
✅ To follow the Single Responsibility Principle (each class focuses only on its job)

Dependency = what you need (service, object).

Injection = getting it from outside, not building it yourself.

Angular DI = system that provides dependencies automatically.


// 4 ways to inject a service in angular
 1. using constructor injection (recommended) - this is the most common way to inject a service in Angular
 2. using inject function - this is a new way to inject a service in Angular, introduced in Angular 14. It is a more functional way to inject a service and can be used in standalone components and other places where constructor injection is not possible.
 3. using element injector - this is a new way to inject a service in Angular, introduced in Angular 14. It is a more functional way to inject a service and can be used in standalone components and other places where constructor injection is not possible.
 4. using root injector - this is a new way to inject a service in Angular, introduced in Angular 14. It is a more functional way to inject a service and can be used in standalone components and other places where constructor injection is not possible.

