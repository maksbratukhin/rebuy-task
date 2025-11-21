import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer } from '@rebuy-workspace/data-access-offers';
import {
  OfferHeaderComponent,
  VoteButtonsComponent
} from '@rebuy-workspace/ui-components';
import { OfferDetailsInfoComponent } from '../offer-details-info/offer-details-info.component';
import { OfferDetailsActionsComponent } from '../offer-details-actions/offer-details-actions.component';

@Component({
  selector: 'rb-offer-details-main',
  standalone: true,
  imports: [
    CommonModule,
    OfferHeaderComponent,
    VoteButtonsComponent,
    OfferDetailsInfoComponent,
    OfferDetailsActionsComponent
  ],
  templateUrl: './offer-details-main.component.html',
})
export class OfferDetailsMainComponent {
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

