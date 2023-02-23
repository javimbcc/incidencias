import { Component, EventEmitter, Output } from '@angular/core';
import {
  Auth,
  getAuth,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { AngularFireAuth, PERSISTENCE } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent {
  constructor(
    private service: CrudService,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  Loguearse(email, password) {
    const auth = getAuth();
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        if (result) {
          this.router.navigate(['/menu']);
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
