import { NovoUsuario } from './novo-usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastraUmNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpClient.post('http://localhost:3000/user/signup', novoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario:string){
    return this.httpClient.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
}
