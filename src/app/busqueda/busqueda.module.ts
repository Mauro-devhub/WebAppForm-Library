import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { busquedaPage } from './busqueda.page';

import { busquedaPageRoutingModule } from './busqueda-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    busquedaPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [busquedaPage]
})
export class busquedaPageModule {}
