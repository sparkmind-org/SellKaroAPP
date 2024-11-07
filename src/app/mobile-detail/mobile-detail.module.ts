import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileDetailPageRoutingModule } from './mobile-detail-routing.module';

import { MobileDetailPage } from './mobile-detail.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileDetailPageRoutingModule
  ],
  declarations: [MobileDetailPage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add this line

})
export class MobileDetailPageModule {}
