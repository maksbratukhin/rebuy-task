import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OffersStore } from '@rebuy-workspace/data-access-offers';
import { CardComponent, RatingComponent, ButtonComponent } from '@rebuy-workspace/ui-components';

@Component({
  selector: 'rb-offer-details',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, RatingComponent, ButtonComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <button 
        (click)="goBack()"
        class="mb-6 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
      >
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Back to offers
      </button>

      @if (store.loading()) {
        <div class="flex justify-center items-center h-96">
          <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      }

      @if (offer()) {
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img 
              [src]="offer()!.imageUrl" 
              [alt]="offer()!.title"
              class="w-full rounded-lg shadow-lg"
            />
          </div>

          <div>
            <div class="mb-4">
              <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                {{ offer()!.category }}
              </span>
              <span class="inline-block ml-2 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                {{ offer()!.condition }}
              </span>
            </div>

            <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ offer()!.title }}</h1>
            
            <div class="flex items-center gap-4 mb-6">
              <span class="text-4xl font-bold text-blue-600">\${{ offer()!.price }}</span>
              <div class="flex items-center gap-2">
                <button
                  (click)="voteUp()"
                  class="p-2 rounded-lg hover:bg-green-50 transition-colors"
                  aria-label="Vote up"
                >
                  <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <span class="text-2xl font-semibold text-gray-700">{{ offer()!.votes }}</span>
                <button
                  (click)="voteDown()"
                  class="p-2 rounded-lg hover:bg-red-50 transition-colors"
                  aria-label="Vote down"
                >
                  <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <rb-card [padding]="'md'" [hover]="false">
              <div class="mb-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Merchant Information</h3>
                <p class="text-gray-700 font-medium">{{ offer()!.merchantName }}</p>
                <rb-rating [rating]="offer()!.merchantRating" />
              </div>
            </rb-card>

            <div class="mt-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p class="text-gray-700 leading-relaxed">{{ offer()!.description }}</p>
            </div>

            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <div class="flex justify-between items-center mb-4">
                <span class="text-gray-700">Stock available:</span>
                <span class="font-semibold text-gray-900">{{ offer()!.stock }} units</span>
              </div>
            </div>

            @if (!showPurchaseForm()) {
              <rb-button 
                [variant]="'primary'" 
                [size]="'lg'" 
                [fullWidth]="true"
                [disabled]="offer()!.stock === 0"
                (clicked)="showPurchaseForm.set(true)"
                class="mt-6"
              >
                @if (offer()!.stock === 0) {
                  Out of Stock
                } @else {
                  Purchase Now
                }
              </rb-button>
            }

            @if (showPurchaseForm()) {
              <rb-card [padding]="'md'" [hover]="false" class="mt-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Complete Purchase</h3>
                
                <div class="mb-4">
                  <label class="block text-gray-700 font-medium mb-2">Quantity</label>
                  <input
                    type="number"
                    [(ngModel)]="quantity"
                    [min]="1"
                    [max]="offer()!.stock"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="mb-4 p-4 bg-blue-50 rounded-lg">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700 font-medium">Total Price:</span>
                    <span class="text-2xl font-bold text-blue-600">\${{ totalPrice() }}</span>
                  </div>
                </div>

                @if (purchaseMessage()) {
                  <div [class]="purchaseSuccess() ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'" class="px-4 py-3 rounded mb-4">
                    {{ purchaseMessage() }}
                  </div>
                }

                <div class="flex gap-3">
                  <rb-button 
                    [variant]="'secondary'" 
                    [size]="'lg'"
                    (clicked)="cancelPurchase()"
                  >
                    Cancel
                  </rb-button>
                  <rb-button 
                    [variant]="'success'" 
                    [size]="'lg'"
                    [fullWidth]="true"
                    [disabled]="store.loading()"
                    (clicked)="confirmPurchase()"
                  >
                    @if (store.loading()) {
                      Processing...
                    } @else {
                      Confirm Purchase
                    }
                  </rb-button>
                </div>
              </rb-card>
            }
          </div>
        </div>
      }

      @if (!store.loading() && !offer()) {
        <div class="text-center py-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Offer not found</h2>
          <rb-button [variant]="'primary'" (clicked)="goBack()">
            Back to offers
          </rb-button>
        </div>
      }
    </div>
  `,
  styles: ``
})
export class OfferDetailsComponent implements OnInit {
  store = inject(OffersStore);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  offer = this.store.selectedOffer;
  showPurchaseForm = signal(false);
  quantity = 1;
  purchaseMessage = signal<string>('');
  purchaseSuccess = signal<boolean>(false);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.loadOfferById(id);
    }
  }

  totalPrice() {
    return this.offer() ? this.offer()!.price * this.quantity : 0;
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

  confirmPurchase() {
    if (this.offer() && this.quantity > 0 && this.quantity <= this.offer()!.stock) {
      this.store.purchaseOffer({
        offerId: this.offer()!.id,
        quantity: this.quantity,
        totalPrice: this.totalPrice()
      });

      setTimeout(() => {
        this.purchaseSuccess.set(true);
        this.purchaseMessage.set('Purchase successful! Your order has been placed.');
        setTimeout(() => {
          this.goBack();
        }, 2000);
      }, 500);
    }
  }

  cancelPurchase() {
    this.showPurchaseForm.set(false);
    this.quantity = 1;
    this.purchaseMessage.set('');
    this.purchaseSuccess.set(false);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

