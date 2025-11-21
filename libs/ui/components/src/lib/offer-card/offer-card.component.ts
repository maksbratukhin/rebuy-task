import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'rb-offer-card',
  standalone: true,
  imports: [CommonModule, CardComponent, RatingComponent],
  template: `
    <rb-card [padding]="'none'" (click)="cardClicked.emit()">
      <div class="relative">
        <img 
          [src]="imageUrl()" 
          [alt]="title()"
          class="w-full h-48 object-cover"
        />
        <div class="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold">
          {{ condition() }}
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{{ title() }}</h3>
        <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ description() }}</p>
        
        <div class="flex items-center justify-between mb-3">
          <span class="text-2xl font-bold text-blue-600">\${{ price() }}</span>
          <span class="text-sm text-gray-500">{{ stock() }} in stock</span>
        </div>

        <div class="flex items-center justify-between mb-3">
          <div>
            <p class="text-sm text-gray-600">{{ merchantName() }}</p>
            <rb-rating [rating]="merchantRating()" [showValue]="false" />
          </div>
        </div>

        <div class="flex items-center justify-between pt-3 border-t border-gray-200">
          <div class="flex items-center gap-2">
            <button
              (click)="voteUp($event)"
              class="p-1 rounded hover:bg-green-50 transition-colors"
              aria-label="Vote up"
            >
              <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <span class="font-semibold text-gray-700">{{ votes() }}</span>
            <button
              (click)="voteDown($event)"
              class="p-1 rounded hover:bg-red-50 transition-colors"
              aria-label="Vote down"
            >
              <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <span class="text-xs text-gray-500">{{ category() }}</span>
        </div>
      </div>
    </rb-card>
  `,
  styles: `
    .line-clamp-1 {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .line-clamp-2 {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  `
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

  voteUp(event: Event) {
    event.stopPropagation();
    this.voteUpClicked.emit();
  }

  voteDown(event: Event) {
    event.stopPropagation();
    this.voteDownClicked.emit();
  }
}

