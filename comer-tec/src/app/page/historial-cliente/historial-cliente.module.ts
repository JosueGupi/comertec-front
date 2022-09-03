import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AlimentosComponent } from 'src/app/components/alimentos/alimentos.component';
import { HistorialClientePageRoutingModule } from './historial-cliente-routing.module';

import { HistorialClientePage } from './historial-cliente.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HistorialClientePageRoutingModule,
    PipesModule
  ],
  declarations: [HistorialClientePage,AlimentosComponent]
})
export class HistorialClientePageModule {}
