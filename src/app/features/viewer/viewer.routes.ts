import { Route } from '@angular/router';

export const VIEWER_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/viewer-page/viewer-page.component').then(
        (m) => m.ViewerPageComponent
      ),
  },
];
