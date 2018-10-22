import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KongosCancionesPage } from './kongos-canciones';

@NgModule({
  declarations: [
    KongosCancionesPage,
  ],
  imports: [
    IonicPageModule.forChild(KongosCancionesPage),
  ],
})
export class KongosCancionesPageModule {}
