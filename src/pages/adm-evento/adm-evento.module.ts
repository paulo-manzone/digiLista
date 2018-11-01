import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmEventoPage } from './adm-evento';

@NgModule({
  declarations: [
    AdmEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmEventoPage),
  ],
})
export class AdmEventoPageModule {}
