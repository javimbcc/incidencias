import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
//Declaramos la coleccion de firebase, id, y el objeto en los que vamos a trabajar
coleccion: string = "usuarios";
documentId: string = "";
incidencia: any;
opcion: string = "";
usuariosLista: any[] = []

constructor(private firebase: CrudService, private fb: FormBuilder,
  private ruta: ActivatedRoute) { }




formUsuario = this.fb.group({
  email: [],
  password: [],
  rol: [],
});

EditarDatos() {
  this.documentId = this.ruta.snapshot.paramMap.get('id')!;
  this.firebase.cogerUno(this.coleccion, this.documentId).subscribe((resp: any) => {
    this.formUsuario.setValue(resp.payload.data());
  });
}
//Metodo para actualizar los datos del portero
ActualizarDatos() {
  this.documentId = this.ruta.snapshot.paramMap.get('id')!;
  this.firebase.Actualizar(this.coleccion, this.documentId,this.formUsuario.value);
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
