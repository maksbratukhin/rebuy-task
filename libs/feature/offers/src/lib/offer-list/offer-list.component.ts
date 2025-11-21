import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OffersStore } from '@rebuy-workspace/data-access-offers';
import { OfferCardComponent } from '@rebuy-workspace/ui-components';

@Component({
  selector: 'rb-offer-list',
  standalone: true,
  imports: [CommonModule, OfferCardComponent],
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
          <rb-offer-card
            [title]="offer.title"
            [description]="offer.description"
            [price]="offer.price"
            [imageUrl]="offer.imageUrl"
            [votes]="offer.votes"
            [merchantName]="offer.merchantName"
            [merchantRating]="offer.merchantRating"
            [category]="offer.category"
            [condition]="offer.condition"
            [stock]="offer.stock"
            (cardClicked)="navigateToDetails(offer.id)"
            (voteUpClicked)="voteUp(offer.id)"
            (voteDownClicked)="voteDown(offer.id)"
          />
        }
      </div>
    </div>
  `,
  styles: ``
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

  voteUp(offerId: string) {
    this.store.voteOffer({ offerId, voteType: 'up' });
  }

  voteDown(offerId: string) {
    this.store.voteOffer({ offerId, voteType: 'down' });
  }
}

