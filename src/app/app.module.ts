import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPage } from '../pages/principal/principal';
import { BuscaPage } from '../pages/busca/busca';
import { InfoEventoPage } from '../pages/info-evento/info-evento';
import { AdmEventoPage } from '../pages/adm-evento/adm-evento';
import { FingerprintPage } from '../pages/fingerprint/fingerprint';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DatabaseProvider } from '../providers/database/database';
import { AddusuarioPage } from '../pages/addusuario/addusuario';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PrincipalPage,
    BuscaPage,
    InfoEventoPage,
    AdmEventoPage,
    FingerprintPage,
    AddusuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAmGyHs46fSX3Wcbhi7aoEPX4dMvdHC7oA",
      authDomain: "digilista-93c61.firebaseapp.com",
      databaseURL: "https://digilista-93c61.firebaseio.com",
      projectId: "digilista-93c61",
      storageBucket: "digilista-93c61.appspot.com",
      messagingSenderId: "1016993486028"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PrincipalPage,
    BuscaPage,
    InfoEventoPage,
    AdmEventoPage,
    FingerprintPage,
    AddusuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}
