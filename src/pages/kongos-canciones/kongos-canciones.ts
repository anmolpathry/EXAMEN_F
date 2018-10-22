import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KongosCancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kongos-canciones',
  templateUrl: 'kongos-canciones.html',
})
export class KongosCancionesPage {

  k;
  kotracks =["1.Come With Me Now (3.32)", "2.Sex On the Radio (3.57)", "3.Escape(4.34)",
   "4.Kids These Days (3.56)", "5.As We Are (4.42)", "6. I Want To Know (3.55)", "7. Hey I Don't Know (4.01)",
  "8.Traveling On (4.32)", "9.Take Me Back (4.46)", "10.It's A Good Life (3.59)" ,"11.I'm Only Joking (3.45)", 
  "12. This Time I Won't (5.46)"
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KongosCancionesPage');
  }

}
