import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gatos } from './gatos';
import { TokenService } from '../autenticacao/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Gatos> {
    const token = this.tokenService.retornarToken();
    const headers = new HttpHeaders().append(`${environment.accessToken}`, token);
    return this.http.get<Gatos>(`${environment.apiUrl}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }


}
