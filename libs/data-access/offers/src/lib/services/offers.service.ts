import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer, OfferVote, OfferPurchase, PurchaseResponse } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/offers`);
  }

  getOfferById(id: string): Observable<Offer> {
    return this.http.get<Offer>(`${this.apiUrl}/offers/${id}`);
  }

  voteOffer(vote: OfferVote): Observable<Offer> {
    return this.http.post<Offer>(`${this.apiUrl}/offers/${vote.offerId}/vote`, {
      voteType: vote.voteType
    });
  }

  purchaseOffer(purchase: OfferPurchase): Observable<PurchaseResponse> {
    return this.http.post<PurchaseResponse>(
      `${this.apiUrl}/offers/${purchase.offerId}/purchase`,
      { quantity: purchase.quantity }
    );
  }
}

