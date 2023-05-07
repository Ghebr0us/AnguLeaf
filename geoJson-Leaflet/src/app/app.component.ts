import { AfterViewInit, Component } from '@angular/core';
import { GEOJSON, GeoFeatureCollection } from './models/geojson.model';
import * as L from 'leaflet'; // Importiamo leaflet
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private map: any;
  geoJsonObject!: any

  private initMap(): void {
    // Creazione della mappa 
    this.map = L.map('map', { 
      center: [45.464211, 9.191383], // Latitudine e longitudine del centro della mappa
      
      zoom: 12,
    });
    
    // Aggiunta del tile alla mappa 
    const tiles = L.tileLayer( 
       // Aggiunge il Layer Tile che in questo caso prendiamo da openstreetmap 
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );  

    tiles.addTo(this.map);  // Aggiunge il tile alla mappa 

    this.geoJsonObject = GEOJSON
    L.geoJSON(this.geoJsonObject).setStyle(this.styleFunc).addTo(this.map)
      // creare un nuovo marker
    for (var i = 0; i <= this.geoJsonObject.features.length; i++) {
      L.marker([this.geoJsonObject.features[i].geometry.coordinates[0][0][1], this.geoJsonObject.features[i].geometry.coordinates[0][0][0]]).bindPopup(String(i)).addTo(this.map);
    }
  }
  
  // cambiare colori delle geometrie
  styleFunc = (feature:any) =>{
    console.log(feature.properties.id)
    let newColor = "#0000FF"; //BLUE
    if(feature.properties.id == 0) newColor = "#00FF00"; //GREEN
    else {newColor = "#FF0000";} //RED
    return ({
      color: newColor
      // clickable: false,
      // fillColor: newColor,
      // strokeWeight: 1
    });
  }

  constructor() {
        //Questi dati dovremmo scaricarli dal server, per ora li abbiamo copiati nel file     gojson.model.ts

  }

  ngAfterViewInit(): void {
    this.initMap();
  }


}