import { Routes } from '@angular/router';
import { AuthenticationGuard } from '@app/core';

import { HomepageComponent } from '@app/home/homepage/homepage.component';

export const HomepageRoutes: Routes = [
  {
    path: '',
    // canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'home',
        component: HomepageComponent,
        data: {
          title: 'Homepage'
        }
      }
    ]
  }
];
