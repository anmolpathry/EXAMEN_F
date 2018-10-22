import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EdImagenPage } from '../ed-imagen/ed-imagen';
import { EdBioPage } from '../ed-bio/ed-bio';
import { EdCancionesPage } from '../ed-canciones/ed-canciones';
import { EdresPage } from '../edres/edres';
import { AdeleImagenPage } from '../adele-imagen/adele-imagen';
import { AdeleBioPage } from '../adele-bio/adele-bio';
import { AdeleCancionesPage } from '../adele-canciones/adele-canciones';
import { AdeleResPage } from '../adele-res/adele-res';
import { ShawnImagenPage } from '../shawn-imagen/shawn-imagen';
import { ShawnBioPage } from '../shawn-bio/shawn-bio';
import { ShawnCancionesPage } from '../shawn-canciones/shawn-canciones';
import { ShawnResPage } from '../shawn-res/shawn-res';
import { KongosImagenPage } from '../kongos-imagen/kongos-imagen';
import { KongosBioPage } from '../kongos-bio/kongos-bio';
import { KongosCancionesPage } from '../kongos-canciones/kongos-canciones';
import { KongosResPage } from '../kongos-res/kongos-res';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    edimagen= EdImagenPage;
    edbio= EdBioPage;
    edcan= EdCancionesPage;
    edres= EdresPage;

    adim=AdeleImagenPage;
    adbio=AdeleBioPage;
    adcan=AdeleCancionesPage;
    adres=AdeleResPage;

    shim=ShawnImagenPage;
    shbio=ShawnBioPage;
    shcan=ShawnCancionesPage;
    shres=ShawnResPage;

    koim=KongosImagenPage;
    kobio=KongosBioPage;
    kocan=KongosCancionesPage;
    kores=KongosResPage;

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

  Adele_Imagen(){
  this.navCtrl.push(this.adim);
  }
  
  Adele_Bio(){
  this.navCtrl.push(this.adbio);
  }
  
  Adele_canciones(){
  this.navCtrl.push(this.adcan);
  }
  
  Adele_res(){
  this.navCtrl.push(this.adres);
  }

Shawn_Imagen(){
this.navCtrl.push(this.shim);
}
    
Shawn_Bio(){
this.navCtrl.push(this.shbio);
}
    
Shawn_canciones(){
this.navCtrl.push(this.shcan);
}
    
Shawn_res(){
this.navCtrl.push(this.shres);
}

Kongos(){
  this.navCtrl.push(this.koim);
  }
      
Kongos_Bio(){
  this.navCtrl.push(this.kobio);
  }
      
Kongos_canciones(){
  this.navCtrl.push(this.kocan);
  }
      
Kongos_res(){
  this.navCtrl.push(this.kores);
  }

}
