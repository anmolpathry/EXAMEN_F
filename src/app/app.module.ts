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

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    EdImagenPage,
    EdBioPage,
    EdCancionesPage,
    EdresPage
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
    EdresPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
