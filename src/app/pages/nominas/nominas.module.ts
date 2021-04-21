import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NominasRoutingModule } from './nominas-routing.module';
import { ListaNominasComponent } from './lista-nominas/lista-nominas.component';
import { FormularioNominasComponent } from './formulario-nominas/formulario-nominas.component';


@NgModule({
  declarations: [
    ListaNominasComponent,
    FormularioNominasComponent
  ],
  imports: [
    CommonModule,
    NominasRoutingModule
  ]
})
export class NominasModule { }
