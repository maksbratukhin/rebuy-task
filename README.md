# Rebuy Marketplace

A modern, production-ready marketplace application built with Angular 20, featuring server-side rendering, real-time voting, and a seamless purchase experience.

## Features

- Browse marketplace offers sorted by votes
- View detailed information about each offer
- Upvote/downvote offers
- Purchase products with stock management
- Responsive design for all devices
- Server-side rendering for optimal performance
- Component library with Storybook

## Tech Stack

### Frontend
- **Angular 20** with standalone components and signals
- **Angular Universal** for server-side rendering
- **NgRx Signal Store** for state management
- **Tailwind CSS** for styling
- **Nx** monorepo with domain-driven design

### Component Library
- **Storybook** for component documentation and development
- Reusable UI components (Button, Card, Rating)

### Backend
- **Node.js + Express** API server as Nx app
- TypeScript for type safety
- Integrated with Nx monorepo
- Mock data for rapid development

### Development Tools
- **Husky** for git hooks
- **lint-staged** for code quality
- **ESLint** and **Prettier** for code formatting
- **Jest** for unit testing
- **Playwright** for e2e testing

## Project Structure

```
rebuy/
├── marketplace/                 # Main Angular application
│   ├── src/
│   │   ├── app/                # Application components
│   │   ├── main.ts             # Client entry point
│   │   ├── main.server.ts      # Server entry point
│   │   └── server.ts           # Express server
│
├── api/                        # Node.js API server (Nx app)
│   └── src/
│       └── main.ts             # Express server
│
├── libs/
│   ├── feature/
│   │   └── offers/            # Feature library for offers
│   │       ├── offer-list/    # List component
│   │       └── offer-details/ # Details component
│   │
│   ├── data-access/
│   │   └── offers/            # Data access layer
│   │       ├── models/        # TypeScript models
│   │       ├── services/      # HTTP services
│   │       └── store/         # Signal store
│   │
│   └── ui/
│       └── components/         # Reusable UI components
│           ├── button/
│           ├── card/
│           ├── rating/
│           ├── offer-card/    # Smart card component
│           └── purchase-form/ # Purchase form component
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd rebuy-workspace
```

2. Install dependencies
```bash
npm install
```

### Development

#### Start both API server and Angular application
```bash
npm run serve
```

or for SSR:

```bash
npm run serve:ssr
```

This will automatically start:
- API server at `http://localhost:3000`
- Angular application at `http://localhost:4200`

#### Start individually

API server only:
```bash
npm run serve:api
```

Angular app only:
```bash
npm run serve:app
```

#### Start Storybook
```bash
npm run storybook
```

Storybook will be available at `http://localhost:4400`

### Build

#### Build for production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Testing

#### Run unit tests
```bash
npm test
```

#### Run e2e tests
```bash
npm run e2e
```

This will automatically:
1. Start the API server at `http://localhost:3000`
2. Start the Angular application at `http://localhost:4200`
3. Run Playwright tests across Chrome, Firefox, and Safari
4. Display an interactive HTML report of test results

The e2e tests will wait for both servers to be ready before running tests.

#### Run linting
```bash
npm run lint
```

#### Format code
```bash
npm run format
```

## Architecture Decisions

### Angular 20 with Signals
Using Angular 20's signal-based reactivity for better performance and simpler state management.

### NgRx Signal Store
Chosen for its lightweight nature and seamless integration with Angular signals, providing type-safe state management without boilerplate.

### Domain-Driven Design
Organized code into feature libraries (offers), data-access libraries, and UI components for better separation of concerns and reusability.

### Angular Universal SSR
Implemented SSR for improved SEO, faster initial load times, and better user experience.

### Tailwind CSS
Selected for rapid UI development with utility-first approach and excellent responsiveness support.

### Nx Monorepo
Using Nx for its powerful build system, code generators, and ability to maintain multiple applications and libraries efficiently.

### Mock Data Strategy
Using in-memory mock data for MVP to enable rapid development and testing without backend dependencies.

## Component Library

The UI components are documented in Storybook:
- **Button**: Multiple variants (primary, secondary, success, danger) and sizes
- **Card**: Configurable padding and hover effects
- **Rating**: Star rating display with customizable appearance

## API Endpoints

### GET /api/health
Health check endpoint for monitoring
Response: `{ "status": "ok", "timestamp": "ISO-8601 date" }`

### GET /api/offers
Returns all offers sorted by votes

### GET /api/offers/:id
Returns a specific offer by ID

### POST /api/offers/:id/vote
Vote on an offer (up/down)
Body: `{ "voteType": "up" | "down" }`

### POST /api/offers/:id/purchase
Purchase an offer
Body: `{ "quantity": number }`
Response: `{ "success": boolean, "message": string, "offer": Offer }`

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

### Workflows

#### 1. CI Workflow (`.github/workflows/ci.yml`)
Runs on every push and pull request:
- **Lint**: Runs ESLint across all projects
- **Test**: Executes unit tests
- **Build**: Builds marketplace and API applications
- Uploads build artifacts for review

#### 2. E2E Tests (`.github/workflows/e2e.yml`)
Runs end-to-end tests on every push and pull request:
- Installs Playwright with all browsers
- Runs tests across Chrome, Firefox, and Safari
- Uploads test reports and screenshots on failure
- 15-minute timeout to prevent hanging

#### 3. Deploy (`.github/workflows/deploy.yml`)
Automatically deploys to GitHub Pages on main branch:
- Builds production-optimized bundle
- Deploys to GitHub Pages
- Updates live site automatically

#### 4. Storybook (`.github/workflows/storybook.yml`)
Builds Storybook component documentation:
- Generates static Storybook build
- Uploads as artifact for review

### Setting Up GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to main branch to trigger deployment
4. Your app will be available at `https://<username>.github.io/<repo-name>`

### Status Badges

Add these to your README to show build status:

```markdown
![CI](https://github.com/<username>/<repo>/workflows/CI/badge.svg)
![E2E Tests](https://github.com/<username>/<repo>/workflows/E2E%20Tests/badge.svg)
![Deploy](https://github.com/<username>/<repo>/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
```

## Deployment

### Manual Deployment
```bash
npm run build
```

Deploy the contents of `dist/marketplace/browser` to your hosting provider.

## Git Hooks

Pre-commit hooks are configured to:
- Run ESLint on staged files
- Format code with Prettier
- Ensure code quality before commits

## Future Enhancements

- User authentication and authorization
- Real-time updates with WebSockets
- Advanced filtering and search
- Payment gateway integration
- Merchant dashboard
- Order history and tracking
- Product recommendations
- Social sharing features

## License

MIT
