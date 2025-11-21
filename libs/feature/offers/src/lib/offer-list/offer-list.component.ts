import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OffersStore } from '@rebuy-workspace/data-access-offers';
import { CardComponent } from '@rebuy-workspace/ui-components';
import { RatingComponent } from '@rebuy-workspace/ui-components';

@Component({
  selector: 'rb-offer-list',
  standalone: true,
  imports: [CommonModule, CardComponent, RatingComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Marketplace Offers</h1>
        <p class="text-gray-600">Browse and vote for your favorite products</p>
      </div>

      @if (store.loading()) {
        <div class="flex justify-center items-center h-64">
          <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      }

      @if (store.error()) {
        <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {{ store.error() }}
        </div>
      }

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        @for (offer of store.sortedOffers(); track offer.id) {
          <rb-card [padding]="'none'" (click)="navigateToDetails(offer.id)">
            <div class="relative">
              <img 
                [src]="offer.imageUrl" 
                [alt]="offer.title"
                class="w-full h-48 object-cover"
              />
              <div class="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                {{ offer.condition }}
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{{ offer.title }}</h3>
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ offer.description }}</p>
              
              <div class="flex items-center justify-between mb-3">
                <span class="text-2xl font-bold text-blue-600">\${{ offer.price }}</span>
                <span class="text-sm text-gray-500">{{ offer.stock }} in stock</span>
              </div>

              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="text-sm text-gray-600">{{ offer.merchantName }}</p>
                  <rb-rating [rating]="offer.merchantRating" [showValue]="false" />
                </div>
              </div>

              <div class="flex items-center justify-between pt-3 border-t border-gray-200">
                <div class="flex items-center gap-2">
                  <button
                    (click)="voteUp($event, offer.id)"
                    class="p-1 rounded hover:bg-green-50 transition-colors"
                    aria-label="Vote up"
                  >
                    <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <span class="font-semibold text-gray-700">{{ offer.votes }}</span>
                  <button
                    (click)="voteDown($event, offer.id)"
                    class="p-1 rounded hover:bg-red-50 transition-colors"
                    aria-label="Vote down"
                  >
                    <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <span class="text-xs text-gray-500">{{ offer.category }}</span>
              </div>
            </div>
          </rb-card>
        }
      </div>
    </div>
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
export class OfferListComponent implements OnInit {
  store = inject(OffersStore);
  private router = inject(Router);

  ngOnInit() {
    this.store.loadOffers();
  }

  navigateToDetails(offerId: string) {
    this.router.navigate(['/offers', offerId]);
  }

  voteUp(event: Event, offerId: string) {
    event.stopPropagation();
    this.store.voteOffer({ offerId, voteType: 'up' });
  }

  voteDown(event: Event, offerId: string) {
    event.stopPropagation();
    this.store.voteOffer({ offerId, voteType: 'down' });
  }
}

