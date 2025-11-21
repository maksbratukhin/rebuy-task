import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

interface Offer {
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

const offers: Offer[] = [
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

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'API server is running' });
});

app.get('/api/offers', (req: Request, res: Response) => {
  res.json(offers);
});

app.get('/api/offers/:id', (req: Request, res: Response) => {
  const offer = offers.find(o => o.id === req.params.id);
  if (offer) {
    res.json(offer);
  } else {
    res.status(404).json({ error: 'Offer not found' });
  }
});

app.post('/api/offers/:id/vote', (req: Request, res: Response) => {
  const { voteType } = req.body;
  const offer = offers.find(o => o.id === req.params.id);
  
  if (offer) {
    offer.votes += voteType === 'up' ? 1 : -1;
    res.json(offer);
  } else {
    res.status(404).json({ error: 'Offer not found' });
  }
});

app.post('/api/offers/:id/purchase', (req: Request, res: Response) => {
  const { quantity } = req.body;
  const offer = offers.find(o => o.id === req.params.id);
  
  if (!offer) {
    res.status(404).json({
      success: false,
      message: 'Offer not found.'
    });
    return;
  }

  if (quantity <= 0) {
    res.status(400).json({
      success: false,
      message: 'Quantity must be greater than 0.'
    });
    return;
  }

  if (offer.stock >= quantity) {
    offer.stock -= quantity;
    res.json({
      success: true,
      message: 'Purchase successful! Your order has been placed.',
      offer: offer
    });
  } else {
    res.status(400).json({
      success: false,
      message: `Insufficient stock available. Only ${offer.stock} items left.`
    });
  }
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
