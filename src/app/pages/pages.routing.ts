import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaEmpleadosComponent } from './empleados/lista-empleados/lista-empleados.component';
import { ListaMovimientosComponent } from './movimientos/lista-movimientos/lista-movimientos.component';
import { ListaNominasComponent } from './nominas/lista-nominas/lista-nominas.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { 
      path: '', 
      component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'empleados', component: ListaEmpleadosComponent },
        { path: 'movimientos', component: ListaMovimientosComponent },
        { path: 'nominas', component: ListaNominasComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
