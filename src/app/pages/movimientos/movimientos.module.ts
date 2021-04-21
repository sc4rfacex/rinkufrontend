import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimientosRoutingModule } from './movimientos-routing.module';
import { ListaMovimientosComponent } from './lista-movimientos/lista-movimientos.component';
import { FormularioMovimientosComponent } from './formulario-movimientos/formulario-movimientos.component';


@NgModule({
  declarations: [
    ListaMovimientosComponent,
    FormularioMovimientosComponent
  ],
  imports: [
    CommonModule,
    MovimientosRoutingModule
  ]
})
export class MovimientosModule { }
