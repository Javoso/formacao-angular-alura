import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFotosGatosComponent } from './grade-fotos-gatos.component';

describe('GradeFotosGatosComponent', () => {
  let component: GradeFotosGatosComponent;
  let fixture: ComponentFixture<GradeFotosGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeFotosGatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeFotosGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
