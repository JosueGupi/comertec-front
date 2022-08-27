import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarAlimentoPageRoutingModule } from './agregar-alimento-routing.module';

import { AgregarAlimentoPage } from './agregar-alimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarAlimentoPageRoutingModule
  ],
  declarations: [AgregarAlimentoPage]
})
export class AgregarAlimentoPageModule {}
