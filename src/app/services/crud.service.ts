import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from '@angular/fire/auth';
import { collection, getDocs, query, where } from "firebase/firestore";
import { Firestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
   authF = getAuth();
  constructor(private firestore: AngularFirestore, private auth: Auth,private afAuth: AngularFireAuth) { }

  cogerTodos(coleccion: string) {
    return this.firestore.collection(coleccion).snapshotChanges();
  }
  //Metodo para coger un documento de la base de datos
  cogerUno(coleccion: string, documentId: string) {
    return this.firestore.collection(coleccion).doc(documentId).snapshotChanges();
  }
  //Metodo para actualizar un documento de la base de datos
  Actualizar(coleccion: string, documentId: string, data: any) {
    return this.firestore.collection(coleccion).doc(documentId).update(data);
  }
  //Metodo para crear un documento de la base de datos
  Crear(coleccion: string, data: any) {
    return this.firestore.collection(coleccion).add(data);
  }
  //Metodo para eliminar un documento de la base de datos
  Eliminar(coleccion: string, documentId: string) {
    return this.firestore.collection(coleccion).doc(documentId).delete();
  }

  //Metodo para recoger los roles de usuario del usuario registrado actualmente
  //recogemos el email del actual logeado en la aplicacion y dentro de su documento recogemos
  //el apartado de rol
  cogerRolUsuario(email: string) {
    return this.firestore.collection('usuarios', ref => ref.where("email", "==", email)).snapshotChanges()
  }

  //Metodo si no esta registrado

  noRegistro() {
    this.afAuth.authState.subscribe((user) => {
      if (!user) {
        return false;
      } else {
        return true;
      }
    });
  }

  //Metodo para recoger los estados de las incidencias
  cogerEstadoIncidencia(estado: string) {
    return this.firestore.collection('incidencias', ref => ref.where("estado", "==", estado)).snapshotChanges()
  }

  //Metodo para recoger el email del usuario logueado actualmente

  cogerEmail() {
    const user = this.authF.currentUser;
    return user.email.toString();
  }

  //Metodo para recoger el rol del usuario mediante el documentID

  cogerRolDocID(documentId: string) {
    return this.firestore.collection('usuarios').doc(documentId).valueChanges()
  }

  //Metodo para crear usuario
  CrearUsuario(data: any) {
    return this.firestore.collection("usuarios").add(data);
  }

  //Metodo para cerrar sesion

  CerrarSesion() {
    const user = this.auth.signOut();
  }


}
