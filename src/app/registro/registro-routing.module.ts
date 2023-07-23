import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registroPage } from './registro.page';

const routes: Routes = [
  {
    path: '',
    component: registroPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class registroPageRoutingModule {}