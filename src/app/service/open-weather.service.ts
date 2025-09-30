import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather-response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  apiKey = '5af2643d6b20a17d6ccb3123b8d4da84';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private http = inject(HttpClient);
  constructor() { }
  buscarInfoClimaCidadeAtual(): Observable<WeatherResponse> {
    const urlCompleta = 
    this.apiUrl + '?q=Dois%20Vizinhos&appid=' + this.apiKey+'&lang=pt_br&units=metrics';

    return this.http.get<WeatherResponse>(urlCompleta);
  }
}