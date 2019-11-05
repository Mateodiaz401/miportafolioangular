import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargar = false;
  equipo: any[] = [];
  constructor(private http: HttpClient) {
    // Leer el archivo JSON
    this.cargarinfo();
    this.cargarequipo();
  }

  private cargarinfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargar = true;
        this.info = resp;
      });
  }

  private cargarequipo() {
    this.http.get('https://angular-html-7de67.firebaseio.com/equipo.json')
        .subscribe((resp: any[]) => {
          this.equipo = resp;
        });
  }
}
