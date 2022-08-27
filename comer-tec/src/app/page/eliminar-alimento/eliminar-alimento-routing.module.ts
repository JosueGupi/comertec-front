import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarAlimentoPage } from './eliminar-alimento.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarAlimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarAlimentoPageRoutingModule {}
