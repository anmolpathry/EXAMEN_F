import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EdImagenPage } from '../ed-imagen/ed-imagen';
import { EdBioPage } from '../ed-bio/ed-bio';
import { EdCancionesPage } from '../ed-canciones/ed-canciones';
import { EdresPage } from '../edres/edres';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    edimagen= EdImagenPage;
    edbio= EdBioPage;
    edcan= EdCancionesPage;
    edres= EdresPage;

  constructor(public navCtrl: NavController) {

  }

  Ed_Imagen(){
  this.navCtrl.push(this.edimagen);
  }

  Ed_Bio(){
    this.navCtrl.push(this.edbio);
  }

  Ed_canciones(){
  this.navCtrl.push(this.edcan);
  }

  Ed_res(){
  this.navCtrl.push(this.edres);
  }

}
