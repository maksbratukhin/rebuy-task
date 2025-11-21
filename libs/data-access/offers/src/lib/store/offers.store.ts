import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, of, delay } from 'rxjs';
import { Offer, OfferVote, OfferPurchase, PurchaseResponse } from '../models/offer.model';
import { inject } from '@angular/core';
import { OffersService } from '../services/offers.service';
import { Router } from '@angular/router';
import { getErrorMessage } from '../utils/getErrorMessage';

type OffersState = {
  offers: Offer[];
  selectedOffer: Offer | null;
  loading: boolean;
  error: string | null;
  purchaseResult: PurchaseResponse | null;
};

const initialState: OffersState = {
  offers: [],
  selectedOffer: null,
  loading: false,
  error: null,
  purchaseResult: null,
};

export const OffersStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ offers }) => ({
    sortedOffers: computed(() => 
      [...offers()].sort((a, b) => b.votes - a.votes)
    ),
    offersCount: computed(() => offers().length),
  })),
  withMethods((store, offersService = inject(OffersService), router = inject(Router)) => ({
    loadOffers: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() => offersService.getOffers()),
        tap({
          next: (offers) => patchState(store, { offers, loading: false }),
          error: (error: unknown) => patchState(store, { error: getErrorMessage(error), loading: false }),
        })
      )
    ),
    loadOfferById: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap((id) => offersService.getOfferById(id)),
        tap({
          next: (offer) => patchState(store, { selectedOffer: offer || null, loading: false }),
          error: (error: unknown) => patchState(store, { error: getErrorMessage(error), loading: false }),
        })
      )
    ),
    voteOffer: rxMethod<OfferVote>(
      pipe(
        switchMap((vote) => offersService.voteOffer(vote)),
        tap({
          next: (updatedOffer) => {
            if (updatedOffer) {
              const offers = store.offers().map(o => 
                o.id === updatedOffer.id ? updatedOffer : o
              );
              patchState(store, { offers });
              if (store.selectedOffer()?.id === updatedOffer.id) {
                patchState(store, { selectedOffer: updatedOffer });
              }
            }
          },
        })
      )
    ),
    purchaseOffer: rxMethod<OfferPurchase>(
      pipe(
        tap(() => patchState(store, { loading: true, purchaseResult: null })),
        switchMap((purchase) => offersService.purchaseOffer(purchase).pipe(
          catchError((error) => {
            const errorMessage = error?.error?.message || 'Purchase failed. Please try again.';
            return of<PurchaseResponse>({ success: false, message: errorMessage });
          })
        )),
        tap({
          next: (result: PurchaseResponse) => {
            patchState(store, { loading: false, purchaseResult: result });
            if (result.success && result.offer) {
              const updatedOffer = result.offer;
              const offers = store.offers().map(o => 
                o.id === updatedOffer.id ? updatedOffer : o
              );
              patchState(store, { offers });
              if (store.selectedOffer()?.id === updatedOffer.id) {
                patchState(store, { selectedOffer: updatedOffer });
              }
            }
          },
        }),
        tap({
          next: (result: PurchaseResponse) => {
            if (result.success) {
              delay(2000);
              router.navigate(['/']);
            }
          },
        })
      )
    ),
    clearPurchaseResult: () => patchState(store, { purchaseResult: null }),
  }))
);

