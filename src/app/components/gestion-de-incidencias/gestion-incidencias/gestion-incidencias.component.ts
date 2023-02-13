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
  datosUsuario : any[];
  correo = this.firebase.cogerEmail()


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

  //Metodo para listar todas las incidencias creadas

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

  //Metodo para coger el rol de usuario

  rolUsuario() {
    this.firebase.cogerRolUsuario(this.correo).subscribe(
      (resp: any) => {
        this.datosUsuario = [];
        resp.forEach((usuarioSnapshot: any) => {
          this.datosUsuario.push(
            {
              ...usuarioSnapshot.payload.doc.data()
            }
          )
        });
        console.log(this.datosUsuario)
      });
  }

  ngOnInit() {
    this.getTodosLosClientes();
    this.rolUsuario()
  }
}
