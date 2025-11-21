import { Component, inject, OnInit, signal, input, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OffersStore } from '@rebuy-workspace/data-access-offers';
import { BackButtonComponent } from '@rebuy-workspace/ui-components';
import { OfferDetailsContentComponent } from '../components/offer-details-content/offer-details-content.component';
import { OfferNotFoundComponent } from '../components/offer-not-found/offer-not-found.component';

@Component({
  selector: 'rb-offer-details',
  standalone: true,
  imports: [
    CommonModule,
    BackButtonComponent,
    OfferDetailsContentComponent,
    OfferNotFoundComponent
  ],
  templateUrl: './offer-details.component.html',
})
export class OfferDetailsComponent implements OnInit {
  store = inject(OffersStore);
  private router = inject(Router);

  id = input.required<string>();
  
  offer = this.store.selectedOffer;
  showPurchaseForm = signal(false);
  purchaseMessage = signal<string>('');
  purchaseSuccess = signal<boolean>(false);

  constructor() {
    effect(() => {
      const result = this.store.purchaseResult();
      if (result && this.showPurchaseForm()) {
        this.purchaseMessage.set(result.message);
        this.purchaseSuccess.set(result.success);
        if (result.success) {
          this.showPurchaseForm.set(false);
        }
      }
    });
  }

  ngOnInit() {
    this.store.clearPurchaseResult();
    this.store.loadOfferById(this.id());
  }

  voteUp() {
    if (this.offer()) {
      this.store.voteOffer({ offerId: this.offer()!.id, voteType: 'up' });
    }
  }

  voteDown() {
    if (this.offer()) {
      this.store.voteOffer({ offerId: this.offer()!.id, voteType: 'down' });
    }
  }

  confirmPurchase(quantity: number) {
    if (this.offer()) {
      this.purchaseMessage.set('');
      this.purchaseSuccess.set(false);
      this.store.purchaseOffer({
        offerId: this.offer()!.id,
        quantity,
        totalPrice: this.offer()!.price * quantity
      });
    }
  }

  cancelPurchase() {
    this.showPurchaseForm.set(false);
    this.purchaseMessage.set('');
    this.purchaseSuccess.set(false);
    this.store.clearPurchaseResult();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
