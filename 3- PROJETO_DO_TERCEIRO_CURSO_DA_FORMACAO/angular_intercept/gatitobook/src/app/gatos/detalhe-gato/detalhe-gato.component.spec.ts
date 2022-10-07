import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheGatoComponent } from './detalhe-gato.component';

describe('DetalheGatoComponent', () => {
  let component: DetalheGatoComponent;
  let fixture: ComponentFixture<DetalheGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheGatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
