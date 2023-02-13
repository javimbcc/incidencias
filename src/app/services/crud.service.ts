import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from '@angular/fire/auth';
import { collection, getDocs, query, where } from "firebase/firestore";
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
   authF = getAuth();
  constructor(private firestore: AngularFirestore, private auth: Auth) { }

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
    console.log(this.firestore.collection('usuarios', ref => ref.where("email", "==", email)).snapshotChanges());
    return this.firestore.collection('usuarios', ref => ref.where("email", "==", email)).snapshotChanges()
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

  //LOGIN Y REGISTER


}
