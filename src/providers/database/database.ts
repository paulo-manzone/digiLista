import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject } from 'rxjs';
import { map} from 'rxjs/operators';
import 'rxjs/add/operator/map';


@Injectable()
export class DatabaseProvider {
  private PATH = 'eventos/';
  constructor(private db: AngularFireDatabase) {
    
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('nome'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      });
  }


  getAllModificado() {
    this.db.list('/eventos').valueChanges().subscribe((datas) => { 
      console.log("datas", datas)
    },(err)=>{
       console.log("probleme : ", err)
    });
  }
 
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
 
  save(evento: any) {
    return new Promise((resolve, reject) => {
      if (evento.key) {
        this.db.list(this.PATH)
          .update(evento.key, { nome: evento.nome, local: evento.local, data: evento.data, criador: evento.criador })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ nome: evento.nome, local: evento.local, data: evento.data, criador: evento.criador })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

  

}
