import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileDetailsPageRoutingModule } from './mobile-details-routing.module';

import { MobileDetailsPage } from './mobile-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileDetailsPageRoutingModule
  ],
  declarations: [MobileDetailsPage]
})
export class MobileDetailsPageModule {}
