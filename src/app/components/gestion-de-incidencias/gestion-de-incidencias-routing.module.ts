import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionIncidenciasComponent } from './gestion-incidencias/gestion-incidencias.component';

const routes: Routes = [
  { path: "gestion", component:  GestionIncidenciasComponent},
  { path: "**", redirectTo: "gestion", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
