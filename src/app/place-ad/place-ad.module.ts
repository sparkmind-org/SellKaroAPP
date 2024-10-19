import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PlaceAdPageRoutingModule } from './place-ad-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PlaceAdPage } from './place-ad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    ReactiveFormsModule,
    PlaceAdPageRoutingModule
  ],
  declarations: [PlaceAdPage]
})
export class PlaceAdPageModule {}
