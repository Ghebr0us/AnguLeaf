import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet'; // Importiamo leaflet

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  private map: any;
  // Aggiungiamo un cerchio con i parametri: ([lat, lng], metri, {colore del cerchio)})
  private circle : any = L.circle([45.464211, 9.191383], 100, { color: 'green'}); 
  // Esercizio: Visualizza un secondo cerchio sulla mappa.
  private circle2 : any = L.circle([45.466370112610406, 9.189983015340752], 100, { color: 'blue'}); 

  private center : any  = { lat: 45.464211, lng: 9.191383 };
  // Visualizza un rettangolo alla destra del triangolo.
  private rectangle: any = L.polygon([
    [this.center.lat + 0.001, this.center.lng],
    [this.center.lat + 0.001, this.center.lng + 0.004],
    [this.center.lat - 0.001, this.center.lng + 0.004],
    [this.center.lat - 0.001, this.center.lng],
  ],{ color: 'purple'});

  
  private initMap(): void {
    // Creazione della mappa 
    this.map = L.map('map', { 
      center: [45.464211, 9.191383], // Latitudine e longitudine del centro della mappa
      zoom: 15,
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


    
    this.circle.addTo(this.map); // Aggiunge il cerchio alla mappa 

    // Esercizio: Visualizza un secondo cerchio sulla mappa.
    this.circle2.addTo(this.map); // Aggiunge il cerchio alla mappa 

    // Esercizio: Cerca altre tre immagini e visualizzale vicino al gatto
    const marker = new L.Marker([45.464211, 9.191383])
    .bindPopup('UGO') // Aggiunge un Popup che verrà visualizzato al click del marker sulla mappa 
    .setIcon(L.icon({ iconUrl: '/assets/img/cat_acrobat.ico', iconSize: [64, 64] }));
    marker.addTo(this.map); // Aggiunge il marker alla mappa 

    const marker2 = new L.Marker([45.464555, 9.191555])
    .bindPopup('UGO') // Aggiunge un Popup che verrà visualizzato al click del marker sulla mappa 
    .setIcon(L.icon({ iconUrl: '/assets/img/troll-face.png', iconSize: [64, 64] }));
    marker2.addTo(this.map); // Aggiunge il marker alla mappa 

    const marker3 = new L.Marker([45.463933, 9.191333])
    .bindPopup('UGO') // Aggiunge un Popup che verrà visualizzato al click del marker sulla mappa 
    .setIcon(L.icon({ iconUrl: '/assets/img/NyanCat.png', iconSize: [128, 128] }));
    marker3.addTo(this.map); // Aggiunge il marker alla mappa 

    const marker4 = new L.Marker([45.464211, 9.191755])
    .bindPopup('UGO') // Aggiunge un Popup che verrà visualizzato al click del marker sulla mappa 
    .setIcon(L.icon({ iconUrl: '/assets/img/DogCoin.png', iconSize: [64, 64] }));
    marker4.addTo(this.map); // Aggiunge il marker alla mappa 


    // Creiamo un triangolo utilizzando la funzione .polygon()
    const triangle = L.polygon([
      [this.center.lat + 0.001, this.center.lng - 0.002],
      [this.center.lat, this.center.lng],
      [this.center.lat - 0.001, this.center.lng - 0.002],
    ]);
    triangle.addTo(this.map); // Aggiunge il triangolo alla mappa 


    this.rectangle.addTo(this.map); // Aggiunge il rettangolo alla mappa 

    
  }

  constructor() {}

  // Esercizio: funzione cambia colore 
  changeColorCerchi(color: string){
    this.circle.setStyle({ color: color})
    this.circle2.setStyle({ color: color})
  }

  // Esercizio: Crea altri tre bottoni per cambiare colore al rettangolo.
  changeColorRett(color: string){
    this.rectangle.setStyle({ color: color})
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}