# Complete Setup Instructions

## Prerequisites
- Node.js 20.x or higher
- npm 9.x or higher

## Installation

### 1. Install Root Dependencies
```bash
npm install
```

### 2. Install API Server Dependencies
```bash
cd api-server
npm install
cd ..
```

## Running the Application

### Quick Start (Development)

#### Terminal 1: Start API Server
```bash
cd api-server
npm run dev
```
This starts the TypeScript API server on http://localhost:3000

#### Terminal 2: Start Angular App
```bash
npm run serve:ssr
```
This starts the Angular app with SSR on http://localhost:4200

### Production Build

#### Build API Server
```bash
cd api-server
npm run build
npm start
```

#### Build Angular App
```bash
npm run build
```

The build output will be in `dist/marketplace/`

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
├── api-server/          # TypeScript API server
│   ├── src/
│   │   └── server.ts
│   ├── tsconfig.json
│   └── package.json
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
- TypeScript Express server
- RESTful API
- CORS enabled
- 8 mock products
- Vote and purchase endpoints

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
Make sure you're in the api-server directory and dependencies are installed:
```bash
cd api-server
npm install
npm run dev
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

1. Start the API server
2. Start the Angular app
3. Visit http://localhost:4200
4. Browse offers
5. Click on an offer to see details
6. Vote on offers
7. Try purchasing an offer

