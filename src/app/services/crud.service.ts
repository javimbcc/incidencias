import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { collection, query, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //private auth: Auth
  constructor(private firestore: AngularFirestore) { }

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

  //Metodo para loguearte con firebase AUTH
  // login({ email, password }: any) {
  //   return signInWithEmailAndPassword(this.auth, email, password);
  // }

  //Metodo para recoger los roles de usuario del usuario registrado actualmente
  cogerRolUsuario(email: string) {
    const query = this.firestore.collection("usuarios").ref.where("email", "==", email);
    query.get().then(snapshot => {
      snapshot.forEach(value => {
        console.log(value.get("rol"))
      })
    });
  }



}
