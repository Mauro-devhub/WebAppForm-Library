import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { busquedaPage } from './busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: busquedaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class busquedaPageRoutingModule {}
