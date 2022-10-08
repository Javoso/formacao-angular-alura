import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoGatoComponent } from './novo-gato.component';

describe('NovoGatoComponent', () => {
  let component: NovoGatoComponent;
  let fixture: ComponentFixture<NovoGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoGatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
