import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuscaPage } from '../busca/busca';
import { AlterarDadosPage } from '../alterar-dados/alterar-dados';
import { UserProvider } from '../../providers/user/user';
import { NovoeventoPage } from '../novoevento/novoevento';
import { AddusuarioPage } from '../addusuario/addusuario';

/**
 * Generated class for the PrincipalAdmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-adm',
  templateUrl: 'principal-adm.html',
})
export class PrincipalAdmPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public user : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalAdmPage');
  }

  goToPageBusca() {
    this.user.setPath('/eventos');
    this.navCtrl.push(BuscaPage);
  }
  
  goToPageAlterarDados() {
    this.navCtrl.push(AlterarDadosPage);
  }
  goToPageCriarEvento(){
    this.navCtrl.push(AddusuarioPage);
  }

}
