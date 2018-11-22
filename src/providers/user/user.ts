import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  usuario: any;

  pathBusca: any;

  constructor() {
    console.log('Hello UserProvider Provider');
  }

  getUsuario() {
    return this.usuario
  }
  
  setUsuario(nome: any) {
    this.usuario = nome;
  }

  getPath() {
    return this.pathBusca;
  }

  setPath(path: any) {
    this.pathBusca = path;
  }

}