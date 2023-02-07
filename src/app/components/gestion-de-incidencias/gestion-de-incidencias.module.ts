import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionIncidenciasComponent } from './gestion-incidencias/gestion-incidencias.component';
import { GestionIncidenciasRoutingModule } from './gestion-de-incidencias-routing.module';
import { MatIconModule } from '@angular/material/icon'



@NgModule({
  declarations: [
    GestionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule,
    MatIconModule,
  ]
})
export class GestionDeIncidenciasModule { }
