import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

private listaDeTransferencias: any[];
private url = ' http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listaDeTransferencias = [];
}

get transferencias(){
  return this.listaDeTransferencias;
}

todas(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url);
}

adicionarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
  this.hidratar(transferencia);
  return this.httpClient.post<Transferencia>(this.url, transferencia);
}

private hidratar(transferencia: any){
  transferencia.data = new Date();
}

}
