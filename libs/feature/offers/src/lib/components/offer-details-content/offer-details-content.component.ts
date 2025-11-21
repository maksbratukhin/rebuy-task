import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer } from '@rebuy-workspace/data-access-offers';
import { OfferImageComponent } from '@rebuy-workspace/ui-components';
import { OfferDetailsMainComponent } from '../offer-details-main/offer-details-main.component';

@Component({
  selector: 'rb-offer-details-content',
  standalone: true,
  imports: [
    CommonModule,
    OfferImageComponent,
    OfferDetailsMainComponent
  ],
  templateUrl: './offer-details-content.component.html',
})
export class OfferDetailsContentComponent {
  offer = input.required<Offer>();
  showPurchaseForm = input.required<boolean>();
  purchaseMessage = input<string>('');
  purchaseSuccess = input<boolean>(false);
  loading = input<boolean>(false);
  
  voteUp = output<void>();
  voteDown = output<void>();
  showForm = output<void>();
  confirmPurchase = output<number>();
  cancelPurchase = output<void>();
}

