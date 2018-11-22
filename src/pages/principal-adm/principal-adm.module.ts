import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalAdmPage } from './principal-adm';

@NgModule({
  declarations: [
    PrincipalAdmPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalAdmPage),
  ],
})
export class PrincipalAdmPageModule {}
