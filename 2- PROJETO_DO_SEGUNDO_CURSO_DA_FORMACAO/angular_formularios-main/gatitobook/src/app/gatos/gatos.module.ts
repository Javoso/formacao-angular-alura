import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { ListaGatosComponent } from './lista-gatos/lista-gatos.component';


@NgModule({
  declarations: [ListaGatosComponent],
  imports: [
    CommonModule,
    GatosRoutingModule
  ]
})
export class GatosModule { }
