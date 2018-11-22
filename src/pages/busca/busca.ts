import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { of, Observable } from 'rxjs';

/**
 * Generated class for the BuscaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})

export class BuscaPage {


  private pathBusca: any;

  elemento: Observable<any>;

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private user: UserProvider, private db: DatabaseProvider) { 
      console.log("OI");
      console.log(this.user.getPath());
      this.pathBusca = this.user.getPath();
      console.log(this.pathBusca);
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

  abrirEvento(event) {}

}
