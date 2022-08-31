import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialPedidoPage } from './historial-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialPedidoPageRoutingModule {}
