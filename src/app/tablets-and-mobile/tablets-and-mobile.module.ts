import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabletsAndMobilePageRoutingModule } from './tablets-and-mobile-routing.module';

import { TabletsAndMobilePage } from './tablets-and-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabletsAndMobilePageRoutingModule
  ],
  declarations: [TabletsAndMobilePage]
})
export class TabletsAndMobilePageModule {}
