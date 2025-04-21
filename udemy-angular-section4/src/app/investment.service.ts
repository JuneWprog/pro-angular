import { Injectable } from "@angular/core";
import { type InputData } from "./module/inputData";
import { type InvestmentResult } from "./module/investmentResult";
import { calculateInvestmentResults } from "./results/investment-results";

@Injectable({providedIn: 'root'})
export class InvestmentService {

  // Array to hold investment results
  investmentResults: InvestmentResult[] = [];

  // Method to calculate investment results based on user input
  calculateResults(inputData: InputData) {
    this.investmentResults = calculateInvestmentResults(inputData).map((result) => ({
      year: result.year,
      investmentValue: result.valueEndOfYear,
      interestYear: result.interest,
      totalInterest: result.totalInterest,
      investedCapital: result.totalAmountInvested,
    }));
    
  }
}