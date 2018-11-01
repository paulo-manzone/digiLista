import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { of, Observable } from 'rxjs';

/**
 * Generated class for the BuscaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})

export class BuscaPage {

  eventos: Observable<any>;
  dab: DatabaseProvider;
  constructor(public navCtrl: NavController, public navParams: NavParams, db: DatabaseProvider) {
    this.dab= db;
    this.eventos = db.getAll();
  }

  abrirEvento(event, item){
    console.log(event);
    console.log(item);
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad BuscaPage');
  }


  onInput(event){
    var q = event.srcElement.value;
    if (!q) {
      this.eventos = this.dab.getAll();
      return;
    }    

    this.eventos = this.eventos
        .map(pessoaList => pessoaList.filter((v) => {
            if (v.nome && q) {
                return v.nome.toLowerCase().indexOf(q.toLowerCase()) !== -1;
            }
        }));
  }

  onCancel(event, db: DatabaseProvider){
    this.eventos = this.dab.getAll();
  }
}
