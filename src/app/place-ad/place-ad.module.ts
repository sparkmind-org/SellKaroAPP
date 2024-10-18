import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceAdPageRoutingModule } from './place-ad-routing.module';

import { PlaceAdPage } from './place-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceAdPageRoutingModule
  ],
  declarations: [PlaceAdPage]
})
export class PlaceAdPageModule {}
