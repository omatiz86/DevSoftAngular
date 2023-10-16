import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteUsuariosComponent } from './reporte-usuarios.component';

describe('ReporteUsuariosComponent', () => {
  let component: ReporteUsuariosComponent;
  let fixture: ComponentFixture<ReporteUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteUsuariosComponent]
    });
    fixture = TestBed.createComponent(ReporteUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
