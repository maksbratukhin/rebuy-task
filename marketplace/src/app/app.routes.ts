import { Route } from '@angular/router';
import { withComponentInputBinding } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@rebuy-workspace/feature-offers').then((m) => m.OfferListComponent),
  },
  {
    path: 'offers/:id',
    loadComponent: () =>
      import('@rebuy-workspace/feature-offers').then((m) => m.OfferDetailsComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
