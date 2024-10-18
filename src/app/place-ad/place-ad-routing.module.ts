import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceAdPage } from './place-ad.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceAdPageRoutingModule {}
