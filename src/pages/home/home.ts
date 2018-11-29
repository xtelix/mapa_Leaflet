import { LeafletPage } from './../leaflet/leaflet';
import { Component } from '@angular/core';
import { NavController, NavPush } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irLeaftlet(){
    this.navCtrl.push(LeafletPage);
  }
}
