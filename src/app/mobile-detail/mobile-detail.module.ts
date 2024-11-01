import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileDetailPageRoutingModule } from './mobile-detail-routing.module';

import { MobileDetailPage } from './mobile-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileDetailPageRoutingModule
  ],
  declarations: [MobileDetailPage]
})
export class MobileDetailPageModule {}
