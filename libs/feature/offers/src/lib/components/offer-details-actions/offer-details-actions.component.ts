import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer } from '@rebuy-workspace/data-access-offers';
import {
  ButtonComponent,
  PurchaseFormComponent
} from '@rebuy-workspace/ui-components';

@Component({
  selector: 'rb-offer-details-actions',
  standalone: true,
  imports: [CommonModule, ButtonComponent, PurchaseFormComponent],
  templateUrl: './offer-details-actions.component.html',
})
export class OfferDetailsActionsComponent {
  offer = input.required<Offer>();
  showPurchaseForm = input.required<boolean>();
  purchaseMessage = input<string>('');
  purchaseSuccess = input<boolean>(false);
  loading = input<boolean>(false);
  
  showForm = output<void>();
  confirmPurchase = output<number>();
  cancelPurchase = output<void>();
}

