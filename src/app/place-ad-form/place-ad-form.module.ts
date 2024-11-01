import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule

import { IonicModule } from '@ionic/angular';

import { PlaceAdFormPageRoutingModule } from './place-ad-form-routing.module';

import { PlaceAdFormPage } from './place-ad-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceAdFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PlaceAdFormPage]
})
export class PlaceAdFormPageModule {}
