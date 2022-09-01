import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionTiemposPageRoutingModule } from './gestion-tiempos-routing.module';

import { GestionTiemposPage } from './gestion-tiempos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GestionTiemposPageRoutingModule
  ],
  declarations: [GestionTiemposPage]
})
export class GestionTiemposPageModule {}
