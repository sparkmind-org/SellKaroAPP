import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceAdForm2PageRoutingModule } from './place-ad-form-2-routing.module';

import { PlaceAdForm2Page } from './place-ad-form-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceAdForm2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PlaceAdForm2Page]
})
export class PlaceAdForm2PageModule {}
