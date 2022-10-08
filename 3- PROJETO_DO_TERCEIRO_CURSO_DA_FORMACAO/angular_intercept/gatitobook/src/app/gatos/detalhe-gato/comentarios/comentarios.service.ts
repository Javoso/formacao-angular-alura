import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentarios } from './comentarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpClient: HttpClient) { }

  buscaComentario(id:number): Observable<Comentarios> {
    return this.httpClient.get<Comentarios>(`${environment.apiUrl}/photos/${id}/comments`);
  }

  incluiComentario(id: number, commentText: string): Observable<Comentarios>{
    return  this.httpClient.post<Comentarios>(`${environment.apiUrl}/photos/${id}/comments`, {
      commentText
    });
  }
}
