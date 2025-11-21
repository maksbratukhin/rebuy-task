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