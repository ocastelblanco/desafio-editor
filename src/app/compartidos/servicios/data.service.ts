import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Pagina = 'pag01.html' | 'pag02.html' | 'pag03.html' | 'pag04.html' | 'pag05.html' | 'pag06.html' | 'pag07.html' | 'pag08.html';
export interface ApiParams {
  accion: 'cargar' | 'visualizar' | 'guardar';
  target?: Pagina;
}
export interface Respuesta {
  error: string | null;
  datos: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  apiGet(params: ApiParams): any {
    const opciones: any = {
      params: {
        accion: params.accion
      }
    };
    if (params.target) opciones.params.target = params.target;
    return this.http.get<Respuesta>('http://localhost/aulaplaneta/desafio-editor/api/api.php', opciones);
  }
}
