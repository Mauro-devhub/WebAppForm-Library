import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registroPage } from './registro.page';
import { registroPageRoutingModule } from './registro-routing.module';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    registroPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [registroPage]
})
export class registroPageModule {}
