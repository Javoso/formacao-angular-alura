import { Component, OnInit } from '@angular/core';
import { Gatos } from '../gatos';
import { UsuarioService } from '../../autenticacao/usuario/usuario.service';
import { GatosService } from '../gatos.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-gatos',
  templateUrl: './lista-gatos.component.html',
  styleUrls: ['./lista-gatos.component.css'],
})
export class ListaGatosComponent implements OnInit {
  gatos$!: Observable<Gatos>;

  constructor(
    private usuarioService: UsuarioService,
    private gatosService: GatosService
  ) {}

  ngOnInit(): void {
    this.gatos$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.gatosService.listaDoUsuario(userName);
      })
    );
  }
}
