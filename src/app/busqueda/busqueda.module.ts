import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { busquedaPage } from './busqueda.page';

import { busquedaPageRoutingModule } from './busqueda-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    busquedaPageRoutingModule
  ],
  declarations: [busquedaPage]
})
export class busquedaPageModule {}
