import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { ListaGatosComponent } from './lista-gatos/lista-gatos.component';
import { GatoComponent } from './gato/gato.component';
import { GradeFotosGatosComponent } from './grade-fotos-gatos/grade-fotos-gatos.component';
import { DetalheGatoComponent } from './detalhe-gato/detalhe-gato.component';
import { ComentariosComponent } from './detalhe-gato/comentarios/comentarios.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListaGatosComponent, GatoComponent, GradeFotosGatosComponent, DetalheGatoComponent, ComentariosComponent],
  imports: [
    CommonModule,
    GatosRoutingModule,
    CartaoModule,
    SharedModule
  ]
})
export class GatosModule { }
