import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PlaylistCollectionRoutes } from '@app/playlist-collection/playlist-collection.routing';
import { PlaylistCollectionIndexComponent } from '@app/playlist-collection/playlist-collection-index/pc-index.component';
import { PlaylistCollectionCreateComponent } from '@app/playlist-collection/playlist-collection-create/pc-create.component';
import { PlaylistCollectionDetailComponent } from '@app/playlist-collection/playlist-collection-detail/pc-detail.component';
import { PlaylistCollectionUpdateComponent } from '@app/playlist-collection/playlist-collection-update/pc-update.component';
import { PlaylistCollectionDeleteComponent } from '@app/playlist-collection/playlist-collection-delete/pc-delete.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    RouterModule.forChild(PlaylistCollectionRoutes)
  ],
  declarations: [
    PlaylistCollectionIndexComponent,
    PlaylistCollectionCreateComponent,
    PlaylistCollectionDetailComponent,
    PlaylistCollectionUpdateComponent,
    PlaylistCollectionDeleteComponent
  ]
})
export class PlaylistCollectionModule {}
