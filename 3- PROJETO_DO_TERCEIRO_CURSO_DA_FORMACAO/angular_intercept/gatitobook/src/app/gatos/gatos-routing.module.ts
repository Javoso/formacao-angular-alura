import { ListaGatosComponent } from './lista-gatos/lista-gatos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheGatoComponent } from './detalhe-gato/detalhe-gato.component';

const routes: Routes = [
  {
    path: '',
    component: ListaGatosComponent,
  },
  {
    path: ':gatoId',
    component: DetalheGatoComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatosRoutingModule { }
