# Quick Start Guide

## Run the Application

### Development Mode

1. Start the application with SSR:

```bash
npm run serve:ssr
```

Visit: `http://localhost:4200`

### View Component Library

Start Storybook to see all reusable components:

```bash
npm run storybook
```

Visit: `http://localhost:4400`

### Optional: Run API Server

If you want to test with the Node.js API backend:

```bash
cd api-server
npm install
npm run dev
```

API will be available at: `http://localhost:3000`

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

- `npm run serve` - Development server (client-side only)
- `npm run serve:ssr` - Development server with SSR
- `npm run build` - Production build
- `npm run test` - Run all tests
- `npm run lint` - Lint all projects
- `npm run format` - Format code with Prettier
- `npm run storybook` - Start Storybook

## Project Structure

```
rebuy-workspace/
├── marketplace/          # Main Angular app (with SSR)
├── libs/
│   ├── feature/offers/  # Offer list & details components
│   ├── data-access/offers/ # Store, services, models
│   └── ui/components/   # Reusable components (Button, Card, Rating)
└── api-server/          # Node.js Express server
```

## Technologies Used

- Angular 20 (latest)
- Angular Universal (SSR)
- NgRx Signal Store
- Tailwind CSS v3
- Nx Monorepo
- Storybook
- Husky + lint-staged
