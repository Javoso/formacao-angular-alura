import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({providedIn: 'root'})
export class UniqueIdService {

  public gerarIdComPrefixo(prefixo:string):string {
    const uuid = this.gerarId();
    return `${prefixo}-${uuid}`;
  }

  public gerarId():string {
    return uuid.v1();
  }
}
