import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabletsAndMobilePage } from './tablets-and-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: TabletsAndMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabletsAndMobilePageRoutingModule {}
