import { Routes } from '@angular/router';
import { AuthenticationGuard } from '@app/core';

import { PlaylistCollectionIndexComponent } from '@app/playlist-collection/playlist-collection-index/pc-index.component';
import { PlaylistCollectionCreateComponent } from './playlist-collection-create/pc-create.component';
import { PlaylistCollectionDetailComponent } from './playlist-collection-detail/pc-detail.component';
import { PlaylistCollectionUpdateComponent } from './playlist-collection-update/pc-update.component';
import { PlaylistCollectionDeleteComponent } from './playlist-collection-delete/pc-delete.component';

export const PlaylistCollectionRoutes: Routes = [
  {
    path: '',
    // canActivate: [AuthenticationGuard],
    children: [
      // Playlist Collection Index
      {
        path: 'playlistcollection/index',
        component: PlaylistCollectionIndexComponent
      },
      //  Playlist Collection Create
      {
        path: 'playlistcollection/create',
        component: PlaylistCollectionCreateComponent
      },
      //  Playlist Collection Detail
      {
        path: 'playlistcollection/detail',
        component: PlaylistCollectionDetailComponent
      },
      //  Playlist Collection Update
      {
        path: 'playlistcollection/update',
        component: PlaylistCollectionUpdateComponent
      },
      //  Playlist Collection Delete
      {
        path: 'playlistcollection/delete',
        component: PlaylistCollectionDeleteComponent
      }
    ]
  }
];
