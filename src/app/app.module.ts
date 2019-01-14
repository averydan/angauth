import * as $ from 'jquery';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutes } from '@app/app.routing';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import {
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard';
import { PlaylistcollectionService } from './services/playlistcollection.service';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    CoreModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  bootstrap: [AppComponent],
  providers: [PlaylistcollectionService]
})
export class AppModule {}
