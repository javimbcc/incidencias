import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';

const routes: Routes = [
  { path: "crear", component: CrearIncidenciaComponent },
  { path: "**", redirectTo: "crear", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearIncidenciasRoutingModule { }
