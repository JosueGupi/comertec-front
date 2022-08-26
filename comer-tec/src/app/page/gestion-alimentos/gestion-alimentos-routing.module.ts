import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAlimentosPage } from './gestion-alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionAlimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAlimentosPageRoutingModule {}
