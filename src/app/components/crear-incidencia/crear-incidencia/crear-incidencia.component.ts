import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crear-incidencia',
  templateUrl: './crear-incidencia.component.html',
  styleUrls: ['./crear-incidencia.component.css']
})
export class CrearIncidenciaComponent {

  constructor(private fb: FormBuilder,
    private firestore: CrudService,) { }
  //La coleccion donde vamos a añadir los juguetes
  coleccion = "incidencias";
  documentId: string = '';

  //Declaramos nuestro formulario para enviar los datos del juguete
  formIncidencias = this.fb.group({
    id: [],
    lugar: [],
    descripcion: [],
    arreglo: [],
    estado: ["no-revisada"],
  });

  crearIncidencias() {
    this.firestore.Crear(this.coleccion, this.formIncidencias.value);
  }
}
