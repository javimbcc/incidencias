import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map} from 'rxjs';
import { CrudService } from '../services/crud.service';

@Injectable({
  providedIn: 'root'
})
//GUARD QUE NOS PROHIBE O PERMITE ACCEDER A LOS APARTADOS DEL EQUIPO EJECUTIVO
//EN CASO DE TENER UN ROL INFERIOR A DOS NO PODREMOS ENTRAR
export class AuthStateGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth, private firebase: CrudService) { }
  //Cogemos el correo del usuario actualmente logueado
  userEmail = this.firebase.cogerEmail();
  //Una vez lo tenemos lo validamos con su correspondiente documento y comprobamos su rol
  //Y metemos los valores a una lista
  datosUsuario: any[] = [];
  //Creamos una variable auxiliar para pasar el rol
  rol: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //Aqui recogemos el usuario que nos de la query con el correo de la persona actualmente logueada
    //y lo metemos a una lista
    return this.firebase.cogerRolUsuario(this.userEmail).pipe(
      map((usuario: any) => {
        this.datosUsuario = [];
        usuario.forEach((data: any) => {
          this.datosUsuario.push(
            {
              ...data.payload.doc.data(),
            }
          )
        });

        this.datosUsuario.forEach((data) => {
          this.rol = data.rol;
        })

        if (this.rol == 2) {
          return true
        } else {
          this.router.navigate(['/menu']);
          return false;
        }
      })
    );

  }
}
