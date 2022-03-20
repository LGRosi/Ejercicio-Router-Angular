import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenedorGeneralComponent } from './components/contenedor-general/contenedor-general.component';
import { Detalle1Component } from './components/detalle1/detalle1.component';

const routes: Routes = [
  {
    path: 'contenedor-general',
    component: ContenedorGeneralComponent,
    children: [
      {
        path: 'detalle1',
        component: Detalle1Component
      },
      {
        path: '**',
        redirectTo: 'contenedor-general'
      }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ListadoRoutingModule { }
