# UdemyAngular
- section 3 
- convert standalone component to non-standalone
    - standalone:false,    or remove standalone
    - remove imports:[]
- import all components into app.module.ts

```ts

@NgModule({
  declarations: [AppComponent, CardComponent, HeaderComponent, UserComponent, NewTaskComponent, TaskComponent, TasksComponent],
  bootstrap:[AppComponent],
  imports: [BrowserModule,FormsModule ],
})
export class AppModule {}
```

- main.ts

```ts
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule)
```
