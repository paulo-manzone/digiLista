import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the InfoEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-evento',
  templateUrl: 'info-evento.html',
})
export class InfoEventoPage {
  nome:any;
  local:any;
  data:any;
  criador:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DatabaseProvider, public user: UserProvider) {
    this.db.getAll('/eventos').subscribe(res => res.map(item => {
      if (item['nome'] == this.user.getEvento()) {
          this.nome = item['nome'];
          this.local = item['local'];
          this.data = item['data'];
          this.criador= item['criador'];
      }
    }));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEventoPage');
  }

  cadastrarParticipante(){
    this.db.saveData({nome: this.user.getUsuario(), evento: this.user.getEvento(), participou: false}, "/lista");
  }

}
