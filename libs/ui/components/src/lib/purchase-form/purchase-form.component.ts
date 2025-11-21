import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { PurchaseFormFieldsComponent } from '../purchase-form-fields/purchase-form-fields.component';
import { PurchaseFormActionsComponent } from '../purchase-form-actions/purchase-form-actions.component';

@Component({
  selector: 'rb-purchase-form',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    PurchaseFormFieldsComponent,
    PurchaseFormActionsComponent
  ],
  templateUrl: './purchase-form.component.html',
})
export class PurchaseFormComponent {
  price = input.required<number>();
  maxStock = input.required<number>();
  loading = input<boolean>(false);
  message = input<string>('');
  success = input<boolean>(false);
  
  quantity = signal(1);
  
  confirmClicked = output<number>();
  cancelClicked = output<void>();
}

