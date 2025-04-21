import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
// import {type InvestmentResult} from '../module/investmentResult';
import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],        // Importing CurrencyPipe for currency formatting
  templateUrl: './investment-results.component.html',
    styleUrls: ['./investment-results.component.css'],
})
export class InvestmentResultsComponent {
  //  constructor(private investmentService: InvestmentService){}
  investmentService = inject(InvestmentService)

  get investmentResults(){
    return this.investmentService.investmentResults
  }

   
}