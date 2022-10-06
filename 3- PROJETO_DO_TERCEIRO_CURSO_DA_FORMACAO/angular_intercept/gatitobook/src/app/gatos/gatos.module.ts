import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { ListaGatosComponent } from './lista-gatos/lista-gatos.component';
import { GatoComponent } from './gato/gato.component';
import { GradeFotosGatosComponent } from './grade-fotos-gatos/grade-fotos-gatos.component';


@NgModule({
  declarations: [ListaGatosComponent, GatoComponent, GradeFotosGatosComponent],
  imports: [
    CommonModule,
    GatosRoutingModule,
    CartaoModule
  ]
})
export class GatosModule { }
