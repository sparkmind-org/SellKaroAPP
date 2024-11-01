import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceAdForm2Page } from './place-ad-form-2.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceAdForm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceAdForm2PageRoutingModule {}
