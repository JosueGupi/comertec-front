import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarPedidosPageRoutingModule } from './gestionar-pedidos-routing.module';

import { GestionarPedidosPage } from './gestionar-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarPedidosPageRoutingModule
  ],
  declarations: [GestionarPedidosPage]
})
export class GestionarPedidosPageModule {}
