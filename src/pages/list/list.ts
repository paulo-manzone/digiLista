import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = db.getAll('/eventos');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    /*this.navCtrl.push(ListPage, {
      item: item
    });*/
  }
}
