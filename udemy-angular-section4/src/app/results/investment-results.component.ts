import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {type InvestmentResult} from '../module/investmentResult';


@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
    styleUrls: ['./investment-results.component.css'],
})
export class InvestmentResultsComponent {
   
    @Input() investmentResults: InvestmentResult[] // Input property to receive data from parent component
    | undefined// Input property to receive data from parent component
    
}