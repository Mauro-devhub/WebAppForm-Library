import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { eliminarPage } from './eliminar.page';

const routes: Routes = [
  {
    path: '',
    component: eliminarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class eliminarPageRoutingModule {}
