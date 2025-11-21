import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteButtonsComponent } from '../vote-buttons/vote-buttons.component';

@Component({
  selector: 'rb-offer-card-footer',
  standalone: true,
  imports: [CommonModule, VoteButtonsComponent],
  templateUrl: './offer-card-footer.component.html',
})
export class OfferCardFooterComponent {
  votes = input.required<number>();
  category = input.required<string>();
  
  voteUp = output<void>();
  voteDown = output<void>();
}

