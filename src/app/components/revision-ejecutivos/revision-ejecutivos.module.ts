import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionEjecutivosRoutingModule } from './revision-ejecutivos-routing.module';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    EditarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    RevisionEjecutivosRoutingModule
  ]
})
export class RevisionEjecutivosModule { }
