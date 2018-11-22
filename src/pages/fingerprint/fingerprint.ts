import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the FingerprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fingerprint',
  templateUrl: 'fingerprint.html',
})
export class FingerprintPage {

  nome:any = "Nome";
  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider, public db: DatabaseProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerprintPage');
  }

  darPresenca() {
    console.log(this.nome);
    this.db.getAll('/lista').subscribe(res => res.map(item => {
      console.log("X");
      console.log(item['evento'] + " == " +  this.user.getEvento());
      console.log(item['nome'] + " == " + this.nome);
      if (item['evento'] == this.user.getEvento() && item['nome'] == this.nome) {
        console.log("foi" + item['key']);
        this.db.updatePresenca({evento: item['evento'], key: item['key'], nome: item['nome'], participou: true}, '/lista', this.nome);
      }
    }));
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'A presença foi dada!',
      buttons: ['Ok']
    });
    alert.present();
  }
}
