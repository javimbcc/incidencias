import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent {
  constructor(private fb: FormBuilder, private firestore: CrudService, private afAuth: AngularFireAuth, private router: Router,) {}
  //La coleccion donde vamos a añadir los juguetes
  coleccion = 'usuarios';
  documentId: string = '';

  //Declaramos nuestro formulario para enviar los datos del juguete
  formUsuario = this.fb.group({
    contraseña: [],
    email: [],
    rol: [1],
  });

  crearUsuario(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
        this.firestore.Crear(this.coleccion, this.formUsuario.value);
        this.router.navigate(["/listaUsuarios"])
      })
  }
}
