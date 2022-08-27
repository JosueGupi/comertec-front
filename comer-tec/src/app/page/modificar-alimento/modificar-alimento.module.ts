import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModificarAlimentoPageRoutingModule } from './modificar-alimento-routing.module';

import { ModificarAlimentoPage } from './modificar-alimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModificarAlimentoPageRoutingModule
  ],
  declarations: [ModificarAlimentoPage]
})
export class ModificarAlimentoPageModule {}
