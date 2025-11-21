# Installation & Setup Guide

## Prerequisites

- Node.js 20.x or higher
- npm 9.x or higher
- Git

## Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Application

```bash
npm run serve:ssr
```

The application will start at `http://localhost:4200`

## What You'll See

### Homepage (/)
- 8 marketplace offers displayed in a grid
- Sorted by votes (highest first)
- Upvote/downvote buttons on each card
- Click any card to view details

### Offer Details (/offers/:id)
- Full product information
- Merchant details with rating
- Stock availability
- Purchase flow with quantity selection
- Vote buttons

## Available Commands

### Development
```bash
npm run serve:ssr    # Start with SSR (recommended)
npm run serve        # Start without SSR
```

### Component Library
```bash
npm run storybook    # View component library
```

### Build
```bash
npm run build        # Production build
```

### Testing
```bash
npm run test         # Run tests
npm run lint         # Lint code
npm run format       # Format code
```

## Optional: API Server

To run the Node.js API server:

```bash
cd api-server
npm install
npm run dev
```

Server runs on `http://localhost:3000`

## Troubleshooting

### Port Already in Use

If port 4200 is in use:
```bash
npm run serve:ssr -- --port 4201
```

### Build Cache Issues

Clear the cache:
```bash
rm -rf .nx .angular
npm run build
```

### Module Not Found

Reinstall dependencies:
```bash
rm -rf node_modules
npm install
```

## Project Features

✅ Server-Side Rendering (SSR)
✅ Signal-based state management
✅ Responsive design
✅ Component library with Storybook
✅ Git hooks with Husky
✅ Production-ready build

## Next Steps

1. Browse the marketplace at `/`
2. Click on any offer to see details
3. Vote on offers using up/down buttons
4. Try purchasing an offer
5. View component library with `npm run storybook`
6. Check out the code in `libs/` directory

## Documentation

- `README.md` - Full project documentation
- `QUICKSTART.md` - Quick reference guide
- `PROJECT_SUMMARY.md` - Technical implementation details

## Support

For issues or questions, refer to the documentation files or check the Git history for implementation details.

---

**Time to First Run**: ~2 minutes (after npm install)

**Enjoy exploring the Rebuy Marketplace!** 🚀

