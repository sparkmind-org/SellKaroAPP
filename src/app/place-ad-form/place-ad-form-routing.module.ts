import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceAdFormPage } from './place-ad-form.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceAdFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceAdFormPageRoutingModule {}
