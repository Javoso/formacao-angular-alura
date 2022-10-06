import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { ListaGatosComponent } from './lista-gatos/lista-gatos.component';
import { GatoComponent } from './gato/gato.component';


@NgModule({
  declarations: [ListaGatosComponent, GatoComponent],
  imports: [
    CommonModule,
    GatosRoutingModule
  ]
})
export class GatosModule { }
