import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioCrudRoutingModule } from './usuario-crud-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioCrudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuarioCrudModule { }
