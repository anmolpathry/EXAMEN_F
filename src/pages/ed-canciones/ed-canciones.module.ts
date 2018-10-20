import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EdCancionesPage } from './ed-canciones';

@NgModule({
  declarations: [
    EdCancionesPage,
  ],
  imports: [
    IonicPageModule.forChild(EdCancionesPage),
  ],
})
export class EdCancionesPageModule {}
