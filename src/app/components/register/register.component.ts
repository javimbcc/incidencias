import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private firebase: CrudService, private afAuth: AngularFireAuth, private router: Router, private fb: FormBuilder) { }

  //Creamos el formulario
  formUsuario = this.fb.group({
    email: [],
    contraseña: [],
    rol: [1],
  });
  Registrarse(email, password) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        console.log(result.user);
        this.firebase.CrearUsuario(this.formUsuario.value)
        this.router.navigate(["/menu"])
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

}
