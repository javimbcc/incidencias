import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-editar-incidencia',
  templateUrl: './editar-incidencia.component.html',
  styleUrls: ['./editar-incidencia.component.css']
})
export class EditarIncidenciaComponent {
  //Declaramos la coleccion de firebase, id, y el objeto en los que vamos a trabajar
  coleccion: string = "incidencias";
  documentId: string = "";
  incidencia: any;
  usuariosLista: any[] = []

  constructor(private firebase: CrudService, private fb: FormBuilder,
    private ruta: ActivatedRoute) { }

  formIncidencias = this.fb.group({
    arreglo: [],
    descripcion: [],
    id: [],
    lugar: [],
    estado: ["no revisada"],
  });

  EditarDatos() {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.firebase.cogerUno(this.coleccion, this.documentId).subscribe((resp: any) => {
      this.formIncidencias.setValue(resp.payload.data());
    });
  }
  //Metodo para actualizar los datos del portero
  ActualizarDatos() {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.firebase.Actualizar(this.coleccion, this.documentId, this.formIncidencias.value);
  }

  Eliminar() {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.firebase.Eliminar(this.coleccion, this.documentId);
  }

  //Listado de los usuarios de la aplicacion para poder asignarles las tareas

  ListarUsuarios() {
    this.firebase.cogerTodos("usuarios").subscribe(
      (resp: any) => {
        this.usuariosLista = [];
        resp.forEach((incidenciasSnapshot: any) => {
          this.usuariosLista.push(
            {
              ...incidenciasSnapshot.payload.doc.data(),
              documentId: incidenciasSnapshot.payload.doc.id,
            }
          )
        });
      })
  }

  ngOnInit() {
    this.EditarDatos();
  }
}
