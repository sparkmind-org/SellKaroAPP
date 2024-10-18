import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilePhonePageRoutingModule } from './mobile-phone-routing.module';

import { MobilePhonePage } from './mobile-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilePhonePageRoutingModule
  ],
  declarations: [MobilePhonePage]
})
export class MobilePhonePageModule {}
