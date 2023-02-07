import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';
import { CrearIncidenciasRoutingModule } from './crar-incidencia-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearIncidenciaComponent
  ],
  imports: [
    CommonModule,
    CrearIncidenciasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CrearIncidenciaModule { }
