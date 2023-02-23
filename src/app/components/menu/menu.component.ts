import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  datosUsuario: any[];
  correo = this.firebase.cogerEmail();
  constructor(private firebase: CrudService, private router: Router) {}

  //Metodo para cerrar sesion
  CerrarSesion() {
    this.router.navigate(['/login']);
    this.firebase.CerrarSesion();
  }

  //Metodo para coger el rol de usuario

  rolUsuario() {
    this.firebase.cogerRolUsuario(this.correo).subscribe((resp: any) => {
      this.datosUsuario = [];
      resp.forEach((usuarioSnapshot: any) => {
        this.datosUsuario.push({
          ...usuarioSnapshot.payload.doc.data(),
          documentId: usuarioSnapshot.payload.doc.id,
        });
      });
    });
  }

  ngOnInit() {
    this.rolUsuario();
  }
}
