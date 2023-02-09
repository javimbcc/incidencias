import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarIncidenciaComponent } from './editar-incidencia.component';

describe('EditarIncidenciaComponent', () => {
  let component: EditarIncidenciaComponent;
  let fixture: ComponentFixture<EditarIncidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarIncidenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
