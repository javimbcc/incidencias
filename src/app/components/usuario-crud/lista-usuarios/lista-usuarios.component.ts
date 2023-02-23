import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent {
  constructor(private firebase: CrudService) {}
  //Requisitos para llamar a la coleccion y pasar los datos a la vista
  coleccion = 'usuarios';
  usuariosLista: any[] = [];
  documentId: string = '';

  //Metodo para listar todas las incidencias creadas

  getTodosLosUsuarios() {
    this.firebase.cogerTodos(this.coleccion).subscribe((resp: any) => {
      this.usuariosLista = [];
      resp.forEach((incidenciasSnapshot: any) => {
        this.usuariosLista.push({
          ...incidenciasSnapshot.payload.doc.data(),
          documentId: incidenciasSnapshot.payload.doc.id,
        });
      });
    });
  }

  ngOnInit() {
    this.getTodosLosUsuarios();
  }
}
