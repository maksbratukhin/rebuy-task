import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { OfferCardImageComponent } from '../offer-card-image/offer-card-image.component';
import { OfferCardDetailsComponent } from '../offer-card-details/offer-card-details.component';
import { OfferCardFooterComponent } from '../offer-card-footer/offer-card-footer.component';

@Component({
  selector: 'rb-offer-card',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    OfferCardImageComponent,
    OfferCardDetailsComponent,
    OfferCardFooterComponent
  ],
  templateUrl: './offer-card.component.html',
})
export class OfferCardComponent {
  title = input.required<string>();
  description = input.required<string>();
  price = input.required<number>();
  imageUrl = input.required<string>();
  votes = input.required<number>();
  merchantName = input.required<string>();
  merchantRating = input.required<number>();
  category = input.required<string>();
  condition = input.required<string>();
  stock = input.required<number>();

  cardClicked = output<void>();
  voteUpClicked = output<void>();
  voteDownClicked = output<void>();
}

