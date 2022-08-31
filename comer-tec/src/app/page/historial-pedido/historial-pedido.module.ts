import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialPedidoPageRoutingModule } from './historial-pedido-routing.module';

import { HistorialPedidoPage } from './historial-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialPedidoPageRoutingModule
  ],
  declarations: [HistorialPedidoPage]
})
export class HistorialPedidoPageModule {}
