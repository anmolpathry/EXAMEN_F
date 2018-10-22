import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KongosBioPage } from './kongos-bio';

@NgModule({
  declarations: [
    KongosBioPage,
  ],
  imports: [
    IonicPageModule.forChild(KongosBioPage),
  ],
})
export class KongosBioPageModule {}
