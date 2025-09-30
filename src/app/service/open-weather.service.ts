import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  apiKey = '5af2643d6b20a17d6ccb3123b8d4da84';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor() { }
  buscarInfoClimaCidadeAtual() {
    const urlCompleta = 
    this.apiUrl + '?q=Dois%20Vizinhos&appid=' + this.apiKey+'&lang=pt_br&units=metrics';

    console.log(urlCompleta);
}
}