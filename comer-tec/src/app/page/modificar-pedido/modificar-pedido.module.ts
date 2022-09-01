import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPedidoPageRoutingModule } from './modificar-pedido-routing.module';

import { ModificarPedidoPage } from './modificar-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModificarPedidoPageRoutingModule
  ],
  declarations: [ModificarPedidoPage]
})
export class ModificarPedidoPageModule {}
