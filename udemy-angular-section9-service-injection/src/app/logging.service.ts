import { Injectable } from '@angular/core';
//dummy service to log messages to the console 
// to show how to inject a service in another service
@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(message: string) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }
}
