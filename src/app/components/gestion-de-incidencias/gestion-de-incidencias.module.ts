import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionIncidenciasComponent } from './gestion-incidencias/gestion-incidencias.component';
import { GestionIncidenciasRoutingModule } from './gestion-de-incidencias-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { EditarIncidenciaComponent } from './editar-incidencia/editar-incidencia.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionIncidenciasComponent,
    EditarIncidenciaComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GestionDeIncidenciasModule { }
