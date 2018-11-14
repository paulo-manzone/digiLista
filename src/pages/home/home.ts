import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToCadastroPage(){
    this.navCtrl.push(CadastroPage);
  }

}
