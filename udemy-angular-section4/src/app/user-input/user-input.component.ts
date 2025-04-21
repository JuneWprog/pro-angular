import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InputData } from '../module/inputData';


//2 way binding
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {

   newInput : InputData = {
    initialInvestment:0,
    annualInvestment:0,
    duration:0,
    expectedReturn:0
   }

   @Output() inputData = new EventEmitter<InputData>()

   onSubmit(){
    console.log(this.newInput);
    this.inputData.emit(this.newInput); // Emit the new input data to the parent component

   }

}