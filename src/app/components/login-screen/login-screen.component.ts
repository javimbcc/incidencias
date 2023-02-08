import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  constructor(private service: CrudService) {}

  //Metodo que implementa nuestro servicio con el metodo del login

  login({ email, password }) {
    //return this.service.login(email, password);
  }
}
