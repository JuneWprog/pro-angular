import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InputData } from '../module/inputData';
import {InvestmentService} from '../investment.service';


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
//using output , pass input data to parent
  //  @Output() inputData = new EventEmitter<InputData>()
  //  onSubmit(){
  //   console.log(this.newInput);
  //   this.inputData.emit(this.newInput); // Emit the new input data to the parent component
  //  }

  
  //using service
  // constructor(private investmentService: InvestmentService) {}
  private investmentService = inject( InvestmentService)
  // Method to handle form submission
  onSubmit() {
    this.investmentService.calculateResults(this.newInput);
  }

}