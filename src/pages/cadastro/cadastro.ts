import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseProvider } from './../../providers/database/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public formCadastro: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private formBuilder: FormBuilder, private db: DatabaseProvider, private toast: ToastController) { 

    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      foto: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      tipoConta: ['user'],
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  patchForm() {
    this.formCadastro.patchValue({
      nome: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      foto: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      tipoConta: ['user'],
    });
  }

  criarUsuario() {
    console.log(this.formCadastro.value);

      this.db.saveData(this.formCadastro.value, '/pessoas');

  }

}
