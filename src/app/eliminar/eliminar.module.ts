import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { eliminarPage } from './eliminar.page';


import { eliminarPageRoutingModule } from './eliminar-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    eliminarPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [eliminarPage]
})
export class eliminarPageModule {}
