import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer } from '@rebuy-workspace/data-access-offers';
import { OfferCardComponent } from '@rebuy-workspace/ui-components';

@Component({
  selector: 'rb-offer-list-grid',
  standalone: true,
  imports: [CommonModule, OfferCardComponent],
  templateUrl: './offer-list-grid.component.html',
})
export class OfferListGridComponent {
  offers = input.required<Offer[]>();
  
  navigate = output<string>();
  voteUp = output<string>();
  voteDown = output<string>();
}

