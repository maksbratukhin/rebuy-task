import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@rebuy-workspace/ui-components';

@Component({
  selector: 'rb-offer-not-found',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './offer-not-found.component.html',
})
export class OfferNotFoundComponent {
  goBack = output<void>();
}

