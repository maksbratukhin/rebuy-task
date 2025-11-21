import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'rb-offer-card-details',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './offer-card-details.component.html',
  styleUrl: './offer-card-details.component.css',
})
export class OfferCardDetailsComponent {
  title = input.required<string>();
  description = input.required<string>();
  price = input.required<number>();
  stock = input.required<number>();
  merchantName = input.required<string>();
  merchantRating = input.required<number>();
}

