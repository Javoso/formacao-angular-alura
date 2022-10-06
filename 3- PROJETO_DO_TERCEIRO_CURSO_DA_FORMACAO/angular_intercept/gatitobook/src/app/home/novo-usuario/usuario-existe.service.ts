import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }


  usuarioJaExiste(){
    return (control: AbstractControl)=> {
      return control.valueChanges.pipe(
        switchMap( (nomeUsuario) =>
          this.novoUsuarioService.verificarUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? {usuarioExistente:true} : null
        ),
        first()
      );
    };
  }
}