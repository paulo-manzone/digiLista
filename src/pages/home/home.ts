import { UserProvider } from './../../providers/user/user';
import { PrincipalPage } from './../principal/principal';
import { DatabaseProvider } from './../../providers/database/database';
import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public username: string;
  public senha: string;

  constructor(public navCtrl: NavController, private db: DatabaseProvider, private user: UserProvider) {

  }

  goToCadastroPage(){
    this.navCtrl.push(CadastroPage);
  }

  login() {

    const user = this.db.login();
      
    var flag = {value: false, tipoConta: 'user'};
     user.subscribe(res => res.map(item => {
      if(item['login'] == this.username && item['senha'] == this.senha){
        flag.value = true;
        flag.tipoConta = item['tipoConta'];
        this.user.setUsuario(this.username);
        this.navCtrl.push(PrincipalPage);
      }
    }));
  }

}
