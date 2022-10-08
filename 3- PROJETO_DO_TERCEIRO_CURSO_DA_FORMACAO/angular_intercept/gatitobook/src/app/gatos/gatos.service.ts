import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe, throwError } from 'rxjs';
import { Gato, Gatos } from './gatos';
import { TokenService } from '../autenticacao/token.service';
import { environment } from 'src/environments/environment';
import { catchError, mapTo } from 'rxjs/operators';


const NOT_MODIFIED ='304';

@Injectable({
  providedIn: 'root',
})
export class GatosService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Gatos> {
    return this.http.get<Gatos>(
      `${environment.apiUrl}/${nomeDoUsuario}/photos`
    );
  }

  buscarPeloID(id: number): Observable<Gato> {
    return this.http.get<Gato>(`${environment.apiUrl}/photos/${id}`);
  }

  excluirGato(id: number): Observable<Gato> {
    return this.http.delete<Gato>(`${environment.apiUrl}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(error);
        })
      );
  }

  upload(descricao: string, permitirComentario: boolean, arquivo: File) {
    const formData = new FormData();
    formData.append('description',descricao);
    formData.append('allowComments', permitirComentario ? 'true' : 'false');
    formData.append('imageFile', arquivo);

    return this.http.post(`${environment.apiUrl}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true
    });
  }
}
