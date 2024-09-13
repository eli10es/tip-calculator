import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  @ViewChild('percentage') percentage: ElementRef<HTMLInputElement>;
  @ViewChild('amount') amount: ElementRef<HTMLInputElement>;

  tip = '';

  calculateTip(amountValue: string, percentageValue: string): void {
    let tipNumber = Number(amountValue) * (Number(percentageValue) / 100);
    this.tip = String(tipNumber.toFixed(2));
  }

  clear() {
    this.tip = '';
    this.percentage.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }
}
