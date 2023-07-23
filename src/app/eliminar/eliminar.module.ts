import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { eliminarPage } from './eliminar.page';


import { eliminarPageRoutingModule } from './eliminar-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    eliminarPageRoutingModule
  ],
  declarations: [eliminarPage]
})
export class eliminarPageModule {}
