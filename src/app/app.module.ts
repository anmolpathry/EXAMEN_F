import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EdImagenPage } from '../pages/ed-imagen/ed-imagen';
import { EdBioPage } from '../pages/ed-bio/ed-bio';
import { EdCancionesPage } from '../pages/ed-canciones/ed-canciones';
import { EdresPage } from '../pages/edres/edres';
import { AdeleBioPage } from '../pages/adele-bio/adele-bio';
import { AdeleImagenPage } from '../pages/adele-imagen/adele-imagen';
import { AdeleCancionesPage } from '../pages/adele-canciones/adele-canciones';
import { AdeleResPage } from '../pages/adele-res/adele-res';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    EdImagenPage,
    EdBioPage,
    EdCancionesPage,
    EdresPage,
    AdeleImagenPage,
    AdeleBioPage,
    AdeleCancionesPage,
    AdeleResPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EdImagenPage,
    EdBioPage,
    EdCancionesPage,
    EdresPage,
    AdeleImagenPage,
    AdeleBioPage,
    AdeleCancionesPage,
    AdeleResPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
