import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the AddusuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addusuario',
  templateUrl: 'addusuario.html',
})
export class AddusuarioPage {
  title: String;
  form: FormGroup;
  evento: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private provider: DatabaseProvider,
    private toast: ToastController) {
    this.evento = this.navParams.data.evento || { };
    this.createForm();
    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.evento ? 'Alterando evento' : 'Novo evento';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.evento.key],
      nome: [this.evento.name, Validators.required],
      local: [this.evento.tel, Validators.required],
      data: [this.evento.tel, Validators.required],
      criador: [this.evento.tel, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.saveData(this.form.value, '/eventos');
    }
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddusuarioPage');
  }

}
