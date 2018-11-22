import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the ListaAdmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-adm',
  templateUrl: 'lista-adm.html',
})
export class ListaAdmPage {

  pathBusca: any = "/lista";
  elemento: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider, public db: DatabaseProvider) {
    this.elemento = this.db.getAll(this.pathBusca);
  }

  onInput(event){
    var q = event.srcElement.value;
    if (!q) {
      this.elemento = this.db.getAll(this.pathBusca);
      return;
    }    

    this.elemento = this.elemento
        .map(ref => ref.filter((v) => {
            if (v.nome && q) {
                  return v.nome.toLowerCase().indexOf(q.toLowerCase()) !== -1;
            }
        }));
  }

  onCancel(event, db: DatabaseProvider){
    this.elemento = this.db.getAll(this.pathBusca);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPage');
  }

  voltarPagina(){
    this.navCtrl.pop();
  }

}
