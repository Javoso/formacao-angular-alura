import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public open(config: ModalConfig): ModalRef {
    console.log('open modal');
    return new ModalRef();
  }
}

interface ModalConfig {
  templateRef: TemplateRef<any>;
  title: string;
}

export class ModalRef {

  public close() :void {
    console.log('Modal closed');
  }
}
