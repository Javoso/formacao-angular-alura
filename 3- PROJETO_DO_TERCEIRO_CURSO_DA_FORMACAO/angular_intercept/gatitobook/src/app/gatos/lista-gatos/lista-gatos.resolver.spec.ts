import { TestBed } from '@angular/core/testing';

import { ListaGatosResolver } from './lista-gatos.resolver';

describe('ListaGatosResolver', () => {
  let resolver: ListaGatosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaGatosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
