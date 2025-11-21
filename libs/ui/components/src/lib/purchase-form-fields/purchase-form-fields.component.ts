import { Component, input, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'rb-purchase-form-fields',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './purchase-form-fields.component.html',
})
export class PurchaseFormFieldsComponent {
  quantity = model.required<number>();
  maxStock = input.required<number>();
  price = input.required<number>();
}

