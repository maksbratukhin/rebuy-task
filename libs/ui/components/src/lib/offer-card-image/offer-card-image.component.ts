import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rb-offer-card-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-card-image.component.html',
})
export class OfferCardImageComponent {
  imageUrl = input.required<string>();
  title = input.required<string>();
  condition = input.required<string>();
}

