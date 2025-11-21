# API Server Migration to Nx

## What Changed

The standalone `api-server` directory has been migrated to a proper Nx application at `api/`.

## Benefits

1. **Integrated with Nx**: API server now benefits from Nx caching and build optimizations
2. **Single Command Start**: `npm run serve` starts both API and frontend automatically
3. **Unified Build System**: All TypeScript compilation managed by Nx
4. **Better Monorepo Structure**: Consistent project organization

## Key Differences

### Old Structure
```
rebuy/
└── api-server/
    ├── package.json        # Separate dependencies
    ├── tsconfig.json
    └── src/
        └── server.ts
```

### New Structure
```
rebuy/
└── api/                    # Nx app
    ├── project.json        # Nx config
    ├── tsconfig.json
    └── src/
        └── main.ts         # Entry point
```

## Command Changes

### Old Commands
```bash
cd api-server
npm install
npm run dev
```

### New Commands
```bash
npm run serve:api       # Start API server
npm run build:api       # Build API server
npm run serve           # Start both API + App
```

## No Action Required

All dependencies are now in the root `package.json`. No separate installation needed!

## Technical Details

- **Executor**: `@nx/esbuild:esbuild` for fast builds
- **Server Executor**: `@nx/js:node` for development
- **Watch Mode**: Automatic restart on file changes
- **Build Output**: `dist/api/`

## Concurrent Execution

The new setup uses `npm-run-all` to run both servers:

```json
"serve": "npm-run-all --parallel serve:api serve:app"
```

This ensures both API and frontend start together automatically!

