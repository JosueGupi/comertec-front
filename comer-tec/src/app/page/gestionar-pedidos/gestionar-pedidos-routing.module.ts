import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarPedidosPage } from './gestionar-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarPedidosPageRoutingModule {}
