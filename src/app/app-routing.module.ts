import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { GestionIncidenciasComponent } from './components/gestion-de-incidencias/gestion-incidencias/gestion-incidencias.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "hacerIncidencia", loadChildren: () => import("./components/crear-incidencia/crear-incidencia.module").then(m => m.CrearIncidenciaModule) },
  { path: "gestionIncidencias", loadChildren: () => import("./components/gestion-de-incidencias/gestion-de-incidencias.module").then(m => m.GestionDeIncidenciasModule) },
  { path: "menu", component: MenuComponent },
  { path: "registro", component: RegisterComponent },
  { path: "gestion", component: GestionIncidenciasComponent },
  { path: "login", component: LoginScreenComponent },
  { path: "**", redirectTo: "registro", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
