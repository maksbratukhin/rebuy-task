export interface Offer {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  votes: number;
  merchantName: string;
  merchantRating: number;
  category: string;
  condition: 'new' | 'like-new' | 'good' | 'acceptable';
  stock: number;
}

export interface OfferVote {
  offerId: string;
  voteType: 'up' | 'down';
}

export interface OfferPurchase {
  offerId: string;
  quantity: number;
  totalPrice: number;
}

