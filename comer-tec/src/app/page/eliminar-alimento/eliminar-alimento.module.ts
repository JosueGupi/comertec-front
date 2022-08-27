import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarAlimentoPageRoutingModule } from './eliminar-alimento-routing.module';

import { EliminarAlimentoPage } from './eliminar-alimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EliminarAlimentoPageRoutingModule
  ],
  declarations: [EliminarAlimentoPage]
})
export class EliminarAlimentoPageModule {}
