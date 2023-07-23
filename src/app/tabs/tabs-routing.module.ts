import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'registro',
        loadChildren: () => import('../registro/registro.module').then(m => m.registroPageModule)
      },
      {
        path: 'buscar-libro',
        loadChildren: () => import('../busqueda/busqueda.module').then(m => m.busquedaPageModule)
      },
      {
        path: 'eliminar-libro',
        loadChildren: () => import('../eliminar/eliminar.module').then(m => m.eliminarPageModule)
      },
      {
        path: '',
        redirectTo: 'registro',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
