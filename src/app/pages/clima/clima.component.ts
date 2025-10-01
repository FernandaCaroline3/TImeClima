import { Component, inject, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { OpenWeatherService } from '../../service/open-weather.service';
import { WeatherResponse } from '../../models/weather-response.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule, DecimalPipe } from '@angular/common'; // ✅ importa CommonModule e DecimalPipe
=======
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { OpenWeatherService } from '../../service/open-weather.service';
>>>>>>> e01549ed32b2c68a78897161bc235092c9ac42a8

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
<<<<<<< HEAD
  styleUrls: ['./clima.component.scss'],
  standalone: true,
  imports: [CommonModule, DecimalPipe] // necessário para *ngIf e pipe 'number'
=======
  styleUrls: ['./clima.component.scss']
>>>>>>> e01549ed32b2c68a78897161bc235092c9ac42a8
})
export class ClimaComponent implements OnInit {

  navegador = inject(Router);
  openWeatherService = inject(OpenWeatherService);
<<<<<<< HEAD

  // transforma Observable em Signal para template reativo
  dadosClima = toSignal<WeatherResponse | null>(
    this.openWeatherService.buscarInfoClimaCidadeAtual().pipe(
      catchError(err => {
        console.error('Erro ao buscar dados do clima', err);
        return of(null);
      })
    )
  );

  // calcula temperatura em Celsius
  get temperaturaCelsius(): number | null {
    const temp = this.dadosClima()?.main?.temp;
    return temp != null ? temp - 273.15 : null;
  }

  constructor() { }

  ngOnInit(): void {
    console.log('ClimaComponent inicializado');
=======
  constructor() { }

  ngOnInit() {
    this.openWeatherService.buscarInfoClimaCidadeAtual();
>>>>>>> e01549ed32b2c68a78897161bc235092c9ac42a8
  }

  navegarParaTelaDePesquisa() {
    this.navegador.navigate(['/pesquisa']);
<<<<<<< HEAD
  }
}
=======
  }


}
>>>>>>> e01549ed32b2c68a78897161bc235092c9ac42a8
