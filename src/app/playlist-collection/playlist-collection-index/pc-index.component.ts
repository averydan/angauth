import { Component, OnInit } from '@angular/core';
import { PlaylistCollectionService } from '@app/core/service/playlistcollection.service';
import { PlaylistCollection } from './../../core/model/playlistcollection.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  templateUrl: './pc-index.component.html',
  styleUrls: ['./pc-index.component.css']
})
export class PlaylistCollectionIndexComponent implements OnInit {
  columnNames = ['OwnerId', 'pid', 'sid', 'DateCreated'];
  dataSource: MatTableDataSource<PlaylistCollection>;

  constructor(private _playlistcollectionService: PlaylistCollectionService) {}

  ngOnInit() {
    this._playlistcollectionService
      .getPlaylists()
      .subscribe((playlists: PlaylistCollection[]) => {
        this.dataSource = new MatTableDataSource<PlaylistCollection>(playlists);
      });
  }
}
