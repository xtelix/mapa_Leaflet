import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Leaflet from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation';

//import "leaflet";
/**
 * Generated class for the LeafletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@IonicPage()
@Component({
  selector: 'page-leaflet',
  templateUrl: 'leaflet.html',
})
export class LeafletPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  mapa: any;
  marker: any;
  

  ngOnInit(): void {
    this.drawMap();
  }


  drawMap(): void {

    this.mapa = Leaflet.map('map').setView([42.3508822,-7.9021054],13);

    //this.marker.bindPopup("<b>Hola, aqui estoy!</b>");

    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Mapa Leaflet',
      maxZoom: 18
    }).addTo(this.mapa);

     //localiza al
     //this.marker = this.mapa.locate({setView: true, watch: true, maxZoom: 16});
     //Marca una coordenada especifica 
     //Leaflet.marker([42.3508822,-7.9021054]).addTo(this.mapa);

     
    this.mapa.locate({setView: true, maxZoom: 18});

    function onLocationError(e) {
      alert(e.message);
    }

    this.mapa.on('locationerror', onLocationError);
  }
  
}
