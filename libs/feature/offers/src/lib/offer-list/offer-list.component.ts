import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OffersStore } from '@rebuy-workspace/data-access-offers';
import { OfferListHeaderComponent } from '../components/offer-list-header/offer-list-header.component';
import { OfferListGridComponent } from '../components/offer-list-grid/offer-list-grid.component';
import { ErrorStateComponent } from '@rebuy-workspace/ui-components';

@Component({
  selector: 'rb-offer-list',
  standalone: true,
  imports: [CommonModule, OfferListHeaderComponent, OfferListGridComponent, ErrorStateComponent],
  templateUrl: './offer-list.component.html',
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

  retry() {
    this.store.loadOffers();
  }
}

