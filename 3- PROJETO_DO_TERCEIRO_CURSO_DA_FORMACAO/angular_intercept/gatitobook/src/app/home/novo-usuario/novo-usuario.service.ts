import { environment } from './../../../environments/environment';
import { NovoUsuario } from './novo-usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastraUmNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpClient.post(`${environment.apiUrl}/user/signup`, novoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario:string){
    return this.httpClient.get(`${environment.apiUrl}/user/exists/${nomeUsuario}`);
  }
}
