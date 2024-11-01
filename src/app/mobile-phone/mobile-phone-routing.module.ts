import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilePhonePage } from './mobile-phone.page';

const routes: Routes = [
  {
    path: '',
    component: MobilePhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilePhonePageRoutingModule {}
