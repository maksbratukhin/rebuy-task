import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { MessageBoxComponent } from '../message-box/message-box.component';

@Component({
  selector: 'rb-purchase-form-actions',
  standalone: true,
  imports: [CommonModule, ButtonComponent, MessageBoxComponent],
  templateUrl: './purchase-form-actions.component.html',
})
export class PurchaseFormActionsComponent {
  loading = input<boolean>(false);
  message = input<string>('');
  success = input<boolean>(false);
  
  confirm = output<void>();
  cancel = output<void>();
}

