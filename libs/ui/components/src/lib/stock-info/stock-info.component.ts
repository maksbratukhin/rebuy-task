import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rb-stock-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-info.component.html',
})
export class StockInfoComponent {
  stock = input.required<number>();
}

