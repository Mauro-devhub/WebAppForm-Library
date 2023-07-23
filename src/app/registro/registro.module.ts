import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registroPage } from './registro.page';

import { registroPageRoutingModule } from './registro-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    registroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [registroPage]
})
export class registroPageModule {}
