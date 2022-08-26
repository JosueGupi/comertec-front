import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionAlimentosPageRoutingModule } from './gestion-alimentos-routing.module';

import { GestionAlimentosPage } from './gestion-alimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionAlimentosPageRoutingModule
  ],
  declarations: [GestionAlimentosPage]
})
export class GestionAlimentosPageModule {}
