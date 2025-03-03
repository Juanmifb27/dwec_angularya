import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { JuegoInterface } from '../interfaces/juegos.interface';
import { JuegosExterno } from '../interfaces/juegos-externo.interface';

@Injectable({
  providedIn: 'root' // Esto permite que el servicio esté disponible globalmente
})
export class RawgService {
  private baseUrl = 'https://api.rawg.io/api/games?key=413c252f5300430ea20277c38ca11901';

  constructor(private httpClient: HttpClient) { }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  getJuegos(url?: string): Observable<JuegosExterno> {
    const apiUrl = url ? url : this.baseUrl;
    return this.httpClient.get<JuegosExterno>(apiUrl);
  }
  

  buscarJuegos(query: string, ordering: string = ''): Observable<JuegosExterno> {
    let apiUrl = `${this.baseUrl}&search=${query}`;
  
    if (ordering) {
      apiUrl += `&ordering=${ordering}`;
    }
  
    return this.httpClient.get<JuegosExterno>(apiUrl);
  }
  

  // buscarJuegos(query: string): Observable<any> {
  //   const url = `${this.baseUrl}&search=${encodeURIComponent(query)}`;
  //   return this.httpClient.get(url);
  // }

  // getGameDetails(id: number): Observable<any> {
  //   return this.httpClient.get(`${this.baseUrl}/games/${id}?key=${this.apiKey}`);
  // }
}


