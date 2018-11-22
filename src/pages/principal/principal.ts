import { UserProvider } from './../../providers/user/user';
import { AlterarDadosPage } from './../alterar-dados/alterar-dados';
import { BuscaPage } from './../busca/busca';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoricoPage } from '../historico/historico';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private user: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  goToPageBusca() {
    this.user.setPath('/eventos');
    this.navCtrl.push(BuscaPage);
  }
  
  goToPageAlterarDados() {
    this.navCtrl.push(AlterarDadosPage);
  }

  goToPageHistorico(){
    this.navCtrl.push(HistoricoPage);
  }

}
