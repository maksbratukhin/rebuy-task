import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rb-offer-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-image.component.html',
})
export class OfferImageComponent {
  imageUrl = input.required<string>();
  title = input.required<string>();
}

