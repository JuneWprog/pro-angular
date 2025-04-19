import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';


type User={
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [CommonModule],

  template: `
    <div>
      <button  (click) ="onSelectUser()" [ngClass] ="selectedUserId === user.id ? 'active' : ''">
        <!-- using signal -->
        <!-- <img [src]="imagePath()" [alt]="user().name" >
        <span>{{ user().name }}</span> -->

        <!-- old way -->
        <img [src]="imagePath" [alt]="user.name">
        <span>{{ user.name }}</span>
      </button>
    </div>
  `,
  styleUrls: ['./user.component.css'], // optional if you want styling
})
export class UserComponent {
    //old way
  @Input({required:true}) user!:User;           // required
  @Input({required:true}) selectedUserId: string | null = null; // required
  @Output() select = new EventEmitter<string>(); // output event emitter


  get imagePath(){
    return '/assets/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id); // emit the selected user id
  }



// //using signal ->  now user is a function  user()
// user = input.required<{ id: string; name: string; avatar: string }>();

// //must use computed to get the image path
// imagePath = computed(() => {
//   return '/assets/' + this.user().avatar; 
// })
// select = output <string>();

// onSelectUser() {
//     this.select.emit(this.user.id); // emit the selected user id
//   }


}







