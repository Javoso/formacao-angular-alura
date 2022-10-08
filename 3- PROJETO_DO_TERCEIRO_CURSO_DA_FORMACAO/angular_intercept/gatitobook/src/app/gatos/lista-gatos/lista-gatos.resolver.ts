import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GatosService } from '../gatos.service';
import { Gatos } from '../gatos';
import { switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListaGatosResolver implements Resolve<Gatos> {
  constructor(
    private gatosService: GatosService,
    private usuarioService: UsuarioService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Gatos> {
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.gatosService.listaDoUsuario(userName)
      }), take(1)
    );
  }
}
