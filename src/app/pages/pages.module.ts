import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './page404/page404.component';
import { PagesComponent } from './pages.component';
import { EmpleadosModule } from './empleados/empleados.module';
import { MovimientosModule } from './movimientos/movimientos.module';
import { NominasModule } from './nominas/nominas.module';


@NgModule({
  declarations: [
    DashboardComponent,
    Page404Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    EmpleadosModule,
    MovimientosModule,
    NominasModule
  ]
})
export class PagesModule { }
