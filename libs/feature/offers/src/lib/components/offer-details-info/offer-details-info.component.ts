import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer } from '@rebuy-workspace/data-access-offers';
import {
  MerchantInfoComponent,
  StockInfoComponent
} from '@rebuy-workspace/ui-components';

@Component({
  selector: 'rb-offer-details-info',
  standalone: true,
  imports: [CommonModule, MerchantInfoComponent, StockInfoComponent],
  templateUrl: './offer-details-info.component.html',
})
export class OfferDetailsInfoComponent {
  offer = input.required<Offer>();
}

