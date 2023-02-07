import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: "hacerIncidencia", loadChildren: () => import("./components/crear-incidencia/crear-incidencia.module").then(m => m.CrearIncidenciaModule) },
  { path: "gestionIncidencias", loadChildren: () => import("./components/gestion-de-incidencias/gestion-de-incidencias.module").then(m => m.GestionDeIncidenciasModule) },
  //{ path: "revisionIncidencias", loadChildren: () => import("./components/revision-incidencias/revision-incidencias.module").then(m => m.RevisionIncidenciasModule) },
  { path: "menu", component: MenuComponent },
  { path: "**", redirectTo: "menu", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
