import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent } from './homepage/homepage.component';
import { HomepageRoutes } from '@app/home/homepage.routing';

@NgModule({
  imports: [RouterModule.forChild(HomepageRoutes)],
  declarations: [HomepageComponent]
})
export class HomepageModule {}
