import { Routes } from '@angular/router';
import { AuthenticationGuard } from '@app/core';

import { PlaylistCollectionIndexComponent } from '@app/playlist-collection/playlist-collection-index/playlist-collection-index.component';
import { PlaylistCollectionCreateComponent } from './playlist-collection-create/playlist-collection-create.component';
import { PlaylistCollectionDetailComponent } from './playlist-collection-detail/playlist-collection-detail.component';
import { PlaylistCollectionUpdateComponent } from './playlist-collection-update/playlist-collection-update.component';
import { PlaylistCollectionDeleteComponent } from './playlist-collection-delete/playlist-collection-delete.component';

export const PlaylistCollectionRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      // Playlist Collection Index
      {
        path: 'playlistcollectionindex',
        component: PlaylistCollectionIndexComponent
      },
      //  Playlist Collection Create
      {
        path: 'playlistcollectioncreate',
        component: PlaylistCollectionCreateComponent
      },
      //  Playlist Collection Detail
      {
        path: 'playlistcollectiondetail',
        component: PlaylistCollectionDetailComponent
      },
      //  Playlist Collection Update
      {
        path: 'playlistcollectionupdate',
        component: PlaylistCollectionUpdateComponent
      },
      //  Playlist Collection Delete
      {
        path: 'playlistcollectiondelete',
        component: PlaylistCollectionDeleteComponent
      }
    ]
  }
];
