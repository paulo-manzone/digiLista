import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { DatabaseProvider } from '../../providers/database/database';
import { ListaAdmPage } from '../lista-adm/lista-adm';
import { FingerprintPage } from '../fingerprint/fingerprint';

/**
 * Generated class for the AdmEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-evento',
  templateUrl: 'adm-evento.html',
})
export class AdmEventoPage {

  nome:any;
  local:any;
  data:any;
  criador:any;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public user: UserProvider, public db: DatabaseProvider) {
      this.db.getAll('/eventos').subscribe(res => res.map(item => {
      if (item['nome'] == this.user.getEvento()) {
          this.nome = item['nome'];
          this.local = item['local'];
          this.data = item['data'];
          this.criador= item['criador'];
      }
    }));
  }


  deletaEvento(){
    this.db.getAll('/eventos').subscribe(res => res.map(item => {
      if (item['nome'] == this.user.getEvento()) {
          this.db.remove(item.key);
      }
    }));
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Evento Excluído com sucesso!',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmEventoPage');
  }

  abrirLista(){
    this.navCtrl.push(ListaAdmPage);
  }

  abrirFinger(){
    this.navCtrl.push(FingerprintPage);
  }
}
