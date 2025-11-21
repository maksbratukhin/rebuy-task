import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rb-offer-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-header.component.html',
})
export class OfferHeaderComponent {
  category = input.required<string>();
  condition = input.required<string>();
  title = input.required<string>();
}

