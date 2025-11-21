import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'rb-merchant-info',
  standalone: true,
  imports: [CommonModule, CardComponent, RatingComponent],
  templateUrl: './merchant-info.component.html',
})
export class MerchantInfoComponent {
  name = input.required<string>();
  rating = input.required<number>();
}

