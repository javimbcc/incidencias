import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

const routes: Routes = [
  { path: 'listaUsuarios', component: ListaUsuariosComponent },
  { path: 'listaUsuarios/editar/:id', component: EditarUsuarioComponent },
  { path: 'listaUsuarios/crear', component: CrearUsuarioComponent },
  { path: '**', redirectTo: 'listaUsuarios', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioCrudRoutingModule {}
