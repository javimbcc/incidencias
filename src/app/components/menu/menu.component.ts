import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  datosUsuario : any[];
  correo = this.firebase.cogerEmail()
  constructor(private firebase: CrudService){}

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
    this.rolUsuario()
  }
}
