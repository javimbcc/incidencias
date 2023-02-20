import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionEjecutivosRoutingModule } from './revision-ejecutivos-routing.module';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    RevisionEjecutivosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RevisionEjecutivosModule { }
