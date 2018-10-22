import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdeleBioPage } from './adele-bio';

@NgModule({
  declarations: [
    AdeleBioPage,
  ],
  imports: [
    IonicPageModule.forChild(AdeleBioPage),
  ],
})
export class AdeleBioPageModule {}
