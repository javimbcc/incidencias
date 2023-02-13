import { Component } from '@angular/core';
import { Auth } from 'firebase/auth';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-gestion-incidencias',
  templateUrl: './gestion-incidencias.component.html',
  styleUrls: ['./gestion-incidencias.component.css']
})
export class GestionIncidenciasComponent {

  constructor(private firebase: CrudService) { }
  //Requisitos para llamar a la coleccion y pasar los datos a la vista
  coleccion = "incidencias";
  incidenciasLista: any[] = [];
  documentId: string = '';


  //Boton que cambia los valores de la lista y muestra las revisadas
  ListarRevisadas() {
    this.firebase.cogerEstadoIncidencia("revisada").subscribe(
      (resp: any) => {
        this.incidenciasLista = [];
        resp.forEach((incidenciasSnapshot: any) => {
          this.incidenciasLista.push(
            {
              ...incidenciasSnapshot.payload.doc.data(),
              documentId: incidenciasSnapshot.payload.doc.id,
            }
          )
        });
      })
  }

  //boton que cambia las listas y muestra las no revisadas

  ListarNoRevisadas() {
    this.firebase.cogerEstadoIncidencia("no-revisada").subscribe(
      (resp: any) => {
        this.incidenciasLista = [];
        resp.forEach((incidenciasSnapshot: any) => {
          this.incidenciasLista.push(
            {
              ...incidenciasSnapshot.payload.doc.data(),
              documentId: incidenciasSnapshot.payload.doc.id,
            }
          )
        });
      })
  }

  getTodosLosClientes() {
    this.firebase.cogerTodos(this.coleccion).subscribe(
      (resp: any) => {
        this.incidenciasLista = [];
        resp.forEach((incidenciasSnapshot: any) => {
          this.incidenciasLista.push(
            {
              ...incidenciasSnapshot.payload.doc.data(),
              documentId: incidenciasSnapshot.payload.doc.id,
            }
          )
        });
      })
  }

  ngOnInit() {
    this.getTodosLosClientes();
    this.firebase.cogerRolUsuario("ejemplo@gmail.com");
  }
}
