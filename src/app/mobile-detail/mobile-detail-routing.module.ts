import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileDetailPage } from './mobile-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MobileDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileDetailPageRoutingModule {}
