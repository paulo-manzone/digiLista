import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaAdmPage } from './lista-adm';

@NgModule({
  declarations: [
    ListaAdmPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaAdmPage),
  ],
})
export class ListaAdmPageModule {}
