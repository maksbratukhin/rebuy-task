# Complete Setup Instructions

## Prerequisites
- Node.js 20.x or higher
- npm 9.x or higher

## Installation

### Install Dependencies
```bash
npm install
```

All dependencies (including API server) are managed in the monorepo.

## Running the Application

### Quick Start (Development)

#### One Command to Start Everything
```bash
npm run serve
```

This automatically starts both:
- **API Server** on http://localhost:3000
- **Angular App** on http://localhost:4200

or with SSR:

```bash
npm run serve:ssr
```

### Production Build

#### Build Both Apps
```bash
npm run build        # Builds marketplace
npm run build:api    # Builds API server
```

Build outputs:
- Marketplace: `dist/marketplace/`
- API: `dist/api/`

## Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
# Make sure both API server and app are running first
npx nx e2e marketplace-e2e
```

### Lint
```bash
npm run lint
```

## Storybook

View the component library:
```bash
npm run storybook
```

Visit http://localhost:4400

## API Endpoints

### Health Check
```bash
curl http://localhost:3000/api/health
```

### Get All Offers
```bash
curl http://localhost:3000/api/offers
```

### Get Single Offer
```bash
curl http://localhost:3000/api/offers/1
```

### Vote on Offer
```bash
curl -X POST http://localhost:3000/api/offers/1/vote \
  -H "Content-Type: application/json" \
  -d '{"voteType": "up"}'
```

### Purchase Offer
```bash
curl -X POST http://localhost:3000/api/offers/1/purchase \
  -H "Content-Type: application/json" \
  -d '{"quantity": 1}'
```

## Project Structure

```
rebuy/
├── api/                 # TypeScript API server (Nx app)
│   └── src/
│       └── main.ts      # Express server
├── marketplace/         # Angular app with SSR
├── libs/
│   ├── feature/offers/  # Offer list & details (small components)
│   ├── data-access/offers/ # HTTP service & signal store
│   └── ui/components/   # Reusable UI components
│       ├── button/
│       ├── card/
│       ├── rating/
│       ├── offer-card/  # Smart offer card component
│       └── purchase-form/ # Purchase form component
├── marketplace-e2e/     # E2E tests
└── .postcssrc.json      # Tailwind CSS config
```

## Key Features

### Frontend
- Angular 20 with signals
- Server-side rendering (SSR)
- Signal Store for state management
- Tailwind CSS for styling
- HttpClient connected to API server
- Responsive design

### Backend
- TypeScript Express server as Nx app
- RESTful API
- CORS enabled
- 8 mock products
- Vote and purchase endpoints
- Integrated with Nx build system

### Development
- Hot reload for both frontend and backend
- Nx monorepo for build optimization
- ESLint for code quality
- Husky for git hooks
- Comprehensive e2e tests

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 4200
lsof -i :4200
# Kill it
kill -9 <PID>
```

### API Server Not Responding
Run the API server:
```bash
npm run serve:api
```

Or rebuild it:
```bash
npm run build:api
```

### Build Errors
Clean and rebuild:
```bash
rm -rf dist .nx node_modules
npm install
npm run build
```

### E2E Tests Failing
Ensure both servers are running:
1. API server on http://localhost:3000
2. Angular app on http://localhost:4200

Then run the e2e tests.

## Next Steps

1. Run `npm run serve` (starts both API and app)
2. Visit http://localhost:4200
3. Browse offers
4. Click on an offer to see details
5. Vote on offers
6. Try purchasing an offer

