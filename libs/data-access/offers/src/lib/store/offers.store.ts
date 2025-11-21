import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { Offer, OfferVote, OfferPurchase } from '../models/offer.model';
import { inject } from '@angular/core';
import { OffersService } from '../services/offers.service';

type OffersState = {
  offers: Offer[];
  selectedOffer: Offer | null;
  loading: boolean;
  error: string | null;
};

const initialState: OffersState = {
  offers: [],
  selectedOffer: null,
  loading: false,
  error: null,
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
  withMethods((store, offersService = inject(OffersService)) => ({
    loadOffers: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() => offersService.getOffers()),
        tap({
          next: (offers) => patchState(store, { offers, loading: false }),
          error: (error: Error) => patchState(store, { error: error.message, loading: false }),
        })
      )
    ),
    loadOfferById: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap((id) => offersService.getOfferById(id)),
        tap({
          next: (offer) => patchState(store, { selectedOffer: offer || null, loading: false }),
          error: (error: Error) => patchState(store, { error: error.message, loading: false }),
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
        tap(() => patchState(store, { loading: true })),
        switchMap((purchase) => offersService.purchaseOffer(purchase)),
        tap({
          next: (result) => {
            patchState(store, { loading: false });
            if (result.success) {
              const offer = store.offers().find(o => o.id === store.selectedOffer()?.id);
              if (offer) {
                const offers = store.offers().map(o => o.id === offer.id ? { ...o } : o);
                patchState(store, { offers });
              }
            }
          },
          error: () => patchState(store, { loading: false }),
        })
      )
    ),
  }))
);

