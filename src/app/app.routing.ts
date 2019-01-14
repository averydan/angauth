import { Routes } from '@angular/router';

import { BlankComponent, FullComponent } from '@app/shared';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  // Homepage
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: './home/homepage.module#HomepageModule'
      }
    ]
  },
  // Playlist Collection Route
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren:
          './playlist-collection/playlist-collection.module#PlaylistCollectionModule'
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren:
          './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
