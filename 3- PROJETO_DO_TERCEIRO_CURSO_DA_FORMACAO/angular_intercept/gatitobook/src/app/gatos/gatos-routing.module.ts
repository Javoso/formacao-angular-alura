import { ListaGatosComponent } from './lista-gatos/lista-gatos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheGatoComponent } from './detalhe-gato/detalhe-gato.component';
import { ListaGatosResolver } from './lista-gatos/lista-gatos.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaGatosComponent,
    resolve:{
      gatos: ListaGatosResolver
    }
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
