import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'productos',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoModule )
  },
  {
    path: 'pagina2',
    component: Pagina2Component,
  },
  {
    path: 'pagina3',
    component: Pagina3Component,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
