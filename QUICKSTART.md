# Quick Start Guide

## Run the Application

### Development Mode (One Command!)

```bash
npm run serve
```

This automatically starts:
- API Server: `http://localhost:3000`
- Angular App: `http://localhost:4200`

or with SSR:

```bash
npm run serve:ssr
```

### View Component Library

Start Storybook to see all reusable components:

```bash
npm run storybook
```

Visit: `http://localhost:4400`

### Run Components Separately (Optional)

API server only:
```bash
npm run serve:api
```

Angular app only:
```bash
npm run serve:app
```

## Key Features to Test

1. **Browse Offers**: View the marketplace with 8 sample offers
2. **Vote on Offers**: Click up/down arrows to vote
3. **View Details**: Click on any offer card to see full details
4. **Purchase Flow**: Click "Purchase Now" on detail page
5. **Responsive Design**: Resize browser to see mobile/tablet layouts
6. **SSR**: View page source to see server-rendered HTML

## Production Build

Build the production bundle:
```bash
npm run build
```

Output will be in: `dist/marketplace`

## Available Commands

- `npm run serve` - Start both API and app (recommended!)
- `npm run serve:ssr` - Start both with SSR
- `npm run serve:api` - API server only
- `npm run serve:app` - Angular app only
- `npm run build` - Build marketplace
- `npm run build:api` - Build API server
- `npm run test` - Run all tests
- `npm run lint` - Lint all projects
- `npm run format` - Format code
- `npm run storybook` - Start Storybook

## Project Structure

```
rebuy/
├── marketplace/          # Main Angular app (with SSR)
├── api/                  # Node.js Express server (Nx app)
├── libs/
│   ├── feature/offers/  # Offer list & details components
│   ├── data-access/offers/ # Store, services, models
│   └── ui/components/   # Reusable components
│       ├── button/
│       ├── card/
│       ├── rating/
│       ├── offer-card/  # Smart card
│       └── purchase-form/ # Purchase form
└── marketplace-e2e/     # E2E tests
```

## Technologies Used

- Angular 20 (latest)
- Angular Universal (SSR)
- NgRx Signal Store
- Tailwind CSS v3
- Nx Monorepo
- Storybook
- Husky + lint-staged
- TypeScript API server integrated with Nx
