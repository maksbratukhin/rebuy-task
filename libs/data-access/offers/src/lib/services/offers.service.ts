import { Injectable, signal } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Offer, OfferVote, OfferPurchase } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private mockOffers: Offer[] = [
    {
      id: '1',
      title: 'iPhone 14 Pro',
      description: 'Latest iPhone with A16 Bionic chip, 128GB storage, Space Black color. Perfect condition with minimal wear.',
      price: 899,
      imageUrl: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500&q=80',
      votes: 245,
      merchantName: 'TechStore Plus',
      merchantRating: 4.8,
      category: 'Electronics',
      condition: 'like-new',
      stock: 5
    },
    {
      id: '2',
      title: 'MacBook Air M2',
      description: '13-inch MacBook Air with M2 chip, 8GB RAM, 256GB SSD. Excellent performance for everyday tasks.',
      price: 1099,
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
      votes: 189,
      merchantName: 'Apple Reseller Pro',
      merchantRating: 4.9,
      category: 'Electronics',
      condition: 'like-new',
      stock: 3
    },
    {
      id: '3',
      title: 'Sony WH-1000XM5',
      description: 'Premium noise-cancelling wireless headphones with exceptional sound quality and 30-hour battery life.',
      price: 349,
      imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80',
      votes: 167,
      merchantName: 'Audio Heaven',
      merchantRating: 4.7,
      category: 'Electronics',
      condition: 'good',
      stock: 8
    },
    {
      id: '4',
      title: 'Samsung 55" QLED TV',
      description: '4K QLED TV with Quantum HDR, smart features, and stunning picture quality for immersive viewing.',
      price: 799,
      imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80',
      votes: 143,
      merchantName: 'Home Entertainment',
      merchantRating: 4.6,
      category: 'Electronics',
      condition: 'like-new',
      stock: 4
    },
    {
      id: '5',
      title: 'Nintendo Switch OLED',
      description: 'Nintendo Switch with vibrant OLED screen, enhanced audio, and 64GB storage. Includes dock and joy-cons.',
      price: 329,
      imageUrl: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500&q=80',
      votes: 198,
      merchantName: 'Gaming Central',
      merchantRating: 4.8,
      category: 'Gaming',
      condition: 'like-new',
      stock: 12
    },
    {
      id: '6',
      title: 'iPad Pro 11"',
      description: 'M2-powered iPad Pro with 128GB storage, Liquid Retina display, and Apple Pencil support.',
      price: 749,
      imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80',
      votes: 134,
      merchantName: 'Tablet World',
      merchantRating: 4.7,
      category: 'Electronics',
      condition: 'good',
      stock: 6
    },
    {
      id: '7',
      title: 'Canon EOS R6',
      description: 'Professional mirrorless camera with 20MP full-frame sensor, 4K video, and advanced autofocus.',
      price: 2199,
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
      votes: 89,
      merchantName: 'Camera Hub',
      merchantRating: 4.9,
      category: 'Photography',
      condition: 'like-new',
      stock: 2
    },
    {
      id: '8',
      title: 'Dyson V15 Detect',
      description: 'Powerful cordless vacuum with laser detection, advanced filtration, and up to 60 minutes runtime.',
      price: 599,
      imageUrl: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&q=80',
      votes: 156,
      merchantName: 'Home Essentials',
      merchantRating: 4.6,
      category: 'Home',
      condition: 'good',
      stock: 7
    }
  ];

  getOffers(): Observable<Offer[]> {
    return of([...this.mockOffers]).pipe(delay(300));
  }

  getOfferById(id: string): Observable<Offer | undefined> {
    const offer = this.mockOffers.find(o => o.id === id);
    return of(offer).pipe(delay(200));
  }

  voteOffer(vote: OfferVote): Observable<Offer | undefined> {
    const offer = this.mockOffers.find(o => o.id === vote.offerId);
    if (offer) {
      offer.votes += vote.voteType === 'up' ? 1 : -1;
    }
    return of(offer).pipe(delay(100));
  }

  purchaseOffer(purchase: OfferPurchase): Observable<{ success: boolean; message: string }> {
    const offer = this.mockOffers.find(o => o.id === purchase.offerId);
    if (offer && offer.stock >= purchase.quantity) {
      offer.stock -= purchase.quantity;
      return of({
        success: true,
        message: 'Purchase successful! Your order has been placed.'
      }).pipe(delay(500));
    }
    return of({
      success: false,
      message: 'Insufficient stock available.'
    }).pipe(delay(500));
  }
}

