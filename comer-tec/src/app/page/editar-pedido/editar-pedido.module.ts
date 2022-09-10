import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPedidoPageRoutingModule } from './editar-pedido-routing.module';

import { EditarPedidoPage } from './editar-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditarPedidoPageRoutingModule
  ],
  declarations: [EditarPedidoPage]
})
export class EditarPedidoPageModule {}
