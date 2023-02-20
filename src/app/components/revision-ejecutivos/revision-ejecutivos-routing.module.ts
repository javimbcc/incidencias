import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path: "listarEjecutivo", component: ListarComponent },
  { path: "listarEjecutivo/editar/:id", component: EditarComponent },
  { path: "**", redirectTo: "listarEjecutivo", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisionEjecutivosRoutingModule { }
