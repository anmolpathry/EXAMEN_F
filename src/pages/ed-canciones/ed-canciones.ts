import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EdCancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ed-canciones',
  templateUrl: 'ed-canciones.html',
})
export class EdCancionesPage {

 
  e;
  edtracks =["1.Eraser (3.47)", "2.Castle on the Hill (4.21)", "3.Dive (3.58)",
   "4.Shape of You (3.53)", "5.Perfect (4.23)", "6.Galway Girl (2.50)", "7.Happier (3.27)",
  "8.New Man (3.09)", "9.Hearts Don't Break Around Here (4.08)", "10. What Do I Know (3.57)" ,"11.How Would You Feel(Paean) (4.40)",
  "12. Supermarket Flowers (3.41)" ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdCancionesPage');

    
     
     
     
     
   
  }

  

 


}
