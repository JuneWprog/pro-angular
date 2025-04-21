import { Component, signal} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {type InputData} from './module/inputData';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './results/investment-results.component';
import {calculateInvestmentResults} from './results/investment-results';
import { type InvestmentResult } from './module/investmentResult';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';
  inputData: InputData = {
    initialInvestment: 0,
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0,
  }
  //using input
  // investmentResults: InvestmentResult[] = [];
  investmentResults = signal<InvestmentResult[]>([]); // Array to hold investment results

  //get input from user-input component and calculate investment results
  onCalculateInvestmentResults(inputData: InputData) {
    this.inputData = inputData;
    this.calculateResults();
  }

  //calculate investment results
  calculateResults(){
    //this.investmentResults = calculateInvestmentResults(this.inputData).map(result => ({
      let results = calculateInvestmentResults(this.inputData).map(result => ({
  
    year: result.year,
      investmentValue: result.valueEndOfYear,
      interestYear: result.interest,
      totalInterest: result.totalInterest,
      investedCapital: result.totalAmountInvested
    }));
    //this.investmentResults = results;
    this.investmentResults.set(results); // Update the signal with the new results
  }

  }
  



