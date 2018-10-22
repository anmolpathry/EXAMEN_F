import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdeleCancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adele-canciones',
  templateUrl: 'adele-canciones.html',
})
export class AdeleCancionesPage {

  a;
  adtracks =["1.Rolling In The Deep (3.48)", "2.Rumour Has It (3.43)", "3.Turning Tables (4.10)",
   "4.Don't You Remember (4.03)", "5.Set Fire To The Rain (4.02)", "6.He Won't Go (4.38)", "7.Take It All(3.48)",
  "8.I'll Be Waiting (4.01)", "9.One and Only (5.48)", "10.Lovesong (5.16)" ,"11.Someone Like You (4.45)",
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdeleCancionesPage');
  }

}
