import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
