import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Leaflet from 'leaflet';
import 'leaflet-draw';
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

    //inicializa un mapa indicando un punto y un zoom de 13 
    this.mapa = Leaflet.map('map').setView([42.3508822,-7.9021054],18);
   
      Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data',
      maxZoom: 18
      }).addTo(this.mapa);

     //localiza al
     //this.marker = this.mapa.locate({setView: true, watch: true, maxZoom: 16});
     
     //Marca una coordenada especifica 
     //Leaflet.marker([42.3508822,-7.9021054]).addTo(this.mapa);
     
     //Localiza y marca tu ubicacion
     this.mapa.locate({
                setView: true,
                maxZoom: 18
              }).on('locationfound', (e) => {
                let markerGroup = Leaflet.featureGroup();
                let marker: any = Leaflet.marker([e.latitude, e.longitude]).on('click', () => {
                  alert('Marker clicked');
                })
                markerGroup.addLayer(marker);
                this.mapa.addLayer(markerGroup);
                }).on('locationerror', (err) => {
                  alert(err.message);
              })


    
  }
  
}
