import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { GestionIncidenciasComponent } from './components/gestion-de-incidencias/gestion-incidencias/gestion-incidencias.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthStateGuard } from './guards/auth-state.guard';
import { MantenimientoAuthGuard } from './guards/mantenimiento-auth.guard';

const routes: Routes = [
  {
    path: 'hacerIncidencia',
    loadChildren: () =>
      import('./components/crear-incidencia/crear-incidencia.module').then(
        (m) => m.CrearIncidenciaModule
      ),
  },
  {
    path: 'gestionEjecutivos',
    canActivate: [AuthStateGuard],
    loadChildren: () =>
      import(
        './components/revision-ejecutivos/revision-ejecutivos.module'
      ).then((m) => m.RevisionEjecutivosModule),
  },
  {
    path: 'crudUsuario',
    loadChildren: () =>
      import('./components/usuario-crud/usuario-crud.module').then(
        (m) => m.UsuarioCrudModule
      ),
  },
  {
    path: 'gestionIncidencias',
    canActivate: [MantenimientoAuthGuard],
    loadChildren: () =>
      import(
        './components/gestion-de-incidencias/gestion-de-incidencias.module'
      ).then((m) => m.GestionDeIncidenciasModule),
  },
  { path: 'menu', component: MenuComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'gestion', component: GestionIncidenciasComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
