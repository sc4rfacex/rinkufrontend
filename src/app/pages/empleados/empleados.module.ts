import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { FormularioEmpleadosComponent } from './formulario-empleados/formulario-empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';


@NgModule({
  declarations: [
    FormularioEmpleadosComponent,
    ListaEmpleadosComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
