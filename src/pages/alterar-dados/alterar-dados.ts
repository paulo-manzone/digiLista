import { UserProvider } from './../../providers/user/user';
import { DatabaseProvider } from './../../providers/database/database';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlterarDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-dados',
  templateUrl: 'alterar-dados.html',
})
export class AlterarDadosPage {
  
  public formCadastro: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private db: DatabaseProvider, private user: UserProvider) {

    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      foto: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarDadosPage');
    this.db.getAll('/pessoas').subscribe(res => res.map(item => {
      if (item['login'] == this.user.getUsuario()) {
        this.formCadastro.patchValue({
          nome: item['nome'],
          foto: item['foto'],
          dataNascimento: item['dataNascimento'],
          cpf: item['cpf'],
          email: item['email'],
        });
      }
    }));
  }

  atualiza() {
    this.db.patchData(this.formCadastro.value, '/pessoas');
  }

}
