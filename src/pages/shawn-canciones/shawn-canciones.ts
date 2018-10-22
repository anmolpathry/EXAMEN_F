import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShawnCancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shawn-canciones',
  templateUrl: 'shawn-canciones.html',
})
export class ShawnCancionesPage {

  s;
  shtracks =["1.Ruin (4.01)", "2.Mercy (3.28)", "3.Treat You Better (3.07)",
   "4.Three Empty Words (3.19)", "5.Don't Be a Fool (3.35)", "6.Like This (3.06)", "7.No Promises(2.46)",
  "8.Lights On (3.06)", "9.Honest (3.19)", "10.Patience (2.55)" ,"11.Bad Reputation (3.18)", "12. Understand (5.00)"
  , "13. There's Nothing Holdin' Me Back (3.14)"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShawnCancionesPage');
  }

}
